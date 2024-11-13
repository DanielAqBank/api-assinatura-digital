<?php


namespace App\Http\Controllers\Docusign;
use Firebase\JWT\JWT;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Services\Docusign\ConnectorService;
use App\Http\Requests\Docusign\createTemplateFromDocxRequest;
use App\Http\Requests\Docusign\createTemplateFromHtmlRequest;
use App\Http\Requests\Docusign\getTemplatesAllRequest;
use App\Http\Requests\Docusign\mergeTemplateRequest;
use App\Http\Requests\Docusign\updateTemplateRequest;
use Laracasts\Flash\Flash;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Docusign\SubmissionController;


class TemplateController extends Controller
{
    public function archiveTemplate($id)
    {
        try {
            $connector = new ConnectorService();
            $connector->sendRequest('DELETE', '/templates/' . $id, null, null);
            Flash::success('Template arquivado com sucesso!');
            return redirect()->route('templates.index');
        } catch (\Exception $e) {
            Flash::error('Erro ao arquivar template: ' . $e->getMessage());
            return redirect()->route('templates.index');
        }
    }

    public function cloneTemplate($id)
    {

        try {
            $connector = new ConnectorService();
            $connector->sendRequest('POST', '/templates/' . $id . '/clone', null, null);
            Flash::success('Template clonado com sucesso!');
            return redirect()->route('templates.index');
        } catch (\Exception $e) {
            Flash::error('Erro ao clonar template: ' . $e->getMessage());
            return redirect()->route('templates.index');
        }
    }

    public function createTemplateFromDocx(createTemplateFromDocxRequest $request)
    {
        try {
            $connector = new ConnectorService();
            $result = $connector->sendRequest('POST', '/templates/docx', null, $request->all());
            Flash::success('Template criado com sucesso!');
            return redirect()->route('templates.index');
        } catch (\Exception $e) {
            Flash::error('Erro ao criar template: ' . $e->getMessage());
            return redirect()->route('templates.index');
        }
    }

    public function createTemplateFromHtml(createTemplateFromHtmlRequest $request)
    {
        try {
            $connector = new ConnectorService();
            $result = $connector->sendRequest('POST', '/templates/html', null, $request->all());
            Flash::success('Template criado com sucesso!');
            return redirect()->route('templates.index');
        } catch (\Exception $e) {
            Flash::error('Erro ao criar template: ' . $e->getMessage());
            return redirect()->route('templates.index');
        }
    }

    public function createTemplateFromPdf(Request $request)
    {
         $request->validate([
            'pdf' => 'required|mimes:pdf|max:10240',
        ]);

        if ($request->hasFile('pdf') && $request->file('pdf')->isValid()) {
            $pdf = $request->file('pdf');
            $path = $pdf->store('pdfs', 'public');
            $pdfContent = file_get_contents(storage_path('app/public/' . $path));
            $pdfBase64 = base64_encode($pdfContent);

            $data = [
                'name' => $request->pdf->getClientOriginalName(),
                'documents' => [
                    [
                        'name' => $request->pdf->getClientOriginalName(),
                        'file' => $pdfBase64,
                    ]
                ]
            ];
            try {
                $connector = new ConnectorService();
                $connector->sendRequest('POST', '/templates/pdf', null, $data);

            Flash::success('Template criado com sucesso!');
                return redirect()->route('templates.index');
            } catch (\Exception $e) {
                Flash::error('Erro ao criar template: ' . $e->getMessage());
                return redirect()->route('templates.index');
            }
        }
        Flash::error('Arquivo PDF não enviado ou inválido');
        return redirect()->route('templates.index');
    }

    public function edit(Request $request)
    {
        try {
            $connector = new ConnectorService();
            $apiToken = $connector->getApiKey(); // Obtain from DocuSeal Console
            $payload = [
                'user_email' => $request->user_email,
                'integration_email' => $request->integration_email,
                'external_id' => $request->template_id,
                'name' => $request->name,
                'document_urls' => [$request->document_urls],
            ];
            $token = JWT::encode($payload, $apiToken, 'HS256');
            return view('templates.edit', ['token' => $token]);
        } catch (\Exception $e) {
            Flash::error('Erro ao criar template: ' . $e->getMessage());
            return redirect()->route('templates.index');
        }
    }


public function createTemplateSignFromPdf(Request $request)
{


}


    public function getTemplateId($id)
    {

        try {
            $connector = new ConnectorService();
            $result = $connector->sendRequest('GET', '/templates/' . $id, null, null);
            Flash::success('Template encontrado com sucesso!');
            return response()->json($result, 200);
        } catch (\Exception $e) {
            Flash::error('Erro ao criar template: ' . $e->getMessage());
            return redirect()->route('templates.index');
        }
    }

    public function getTemplatesAll(getTemplatesAllRequest $request)
    {

        try {
            $connector = new ConnectorService();
            $result = $connector->sendRequest('GET', '/templates', null, null);
            $apiToken = $connector->getApiKey(); // Obtain from DocuSeal Console

            foreach ($result['data'] as $key => $template) {
                $submissionController = new SubmissionController();
                $submissions = $submissionController->SubmissionsList($template['id']);
                $status = null;
                foreach ($submissions['data'] as $submission) {
                    if($template['id'] == $submission['template']['id']){
                        $status = $submission['status'];
                    }
                }
                $response[$key]['id'] = $template['id'];
                $response[$key]['name'] = $template['name'];
                $response[$key]['created_at'] = $template['created_at'];
                $response[$key]['slug'] = $template['slug'];
                if(isset($status)){
                    $response[$key]['status'] = $status;
                } else {
                    $response[$key]['status'] = 'Vazio';
                }
                $response[$key]['user_email'] = $template['author']['email'];
                $response[$key]['integration_email'] = $template['author']['email'];
                $response[$key]['template_id'] = $template['id'];
                $response[$key]['name'] = $template['name'];
                $response[$key]['document_urls'] = [$template['documents'][0]['url']];
            }
            return view('templates.index', ['templates' => $response]);
        } catch (\Exception $e) {
            Flash::error('Erro ao criar template: ' . $e->getMessage());
            return redirect()->route('templates.index');
        }
    }

    public function mergeTemplate(mergeTemplateRequest $request)
    {
        try {
            $connector = new ConnectorService();
            $result = $connector->sendRequest('POST', '/templates/merge', null, $request->all());
            Flash::success('Template mesclado com sucesso!');
            return redirect()->route('templates.index');
        } catch (\Exception $e) {
            Flash::error('Erro ao criar template: ' . $e->getMessage());
            return redirect()->route('templates.index');
        }
    }

    public function updateTemplate(updateTemplateRequest $request)
    {
        $id = $request->id;

        try {
            $connector = new ConnectorService();
            $result = $connector->sendRequest('PUT', '/templates/' . $id, null, $request->all());
            Flash::success('Template atualizado com sucesso!');
            return redirect()->route('templates.index');
        } catch (\Exception $e) {
            Flash::error('Erro ao atualizar template: ' . $e->getMessage());
            return redirect()->route('templates.index');
        }
    }



}
