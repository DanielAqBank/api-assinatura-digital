<?php

namespace App\Http\Controllers\Docusign;

use App\Http\Services\Docusign\ConnectorService;
use App\Http\Controllers\Controller;
use App\Http\Requests\Docusign\createSubmissionRequest;
use App\Http\Requests\Docusign\CreateSubmissionEmailsRequest;
class SubmissionController extends Controller
{

    public function archiveSubmission($id)
    {
        if (!is_numeric($id)) {
            return response()->json(['error' => 'Submission ID must be a number'], 400);
        }
        try {
            $connector = new ConnectorService();
            $result = $connector->sendRequest('DELETE', '/submissions/' . $id, null, null);
            return response()->json($result, 200);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    public function createSubmission(createSubmissionRequest $request)
    {
        try {
            $connector = new ConnectorService();
            $result = $connector->sendRequest('POST', '/submissions', null, $request->all());
            return response()->json($result, 200);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    public function createSubmissionsFromEmails(CreateSubmissionEmailsRequest $request)
    {
        try {
            $connector = new ConnectorService();
            $result = $connector->sendRequest('POST', '/submissions/emails', null, $request->all());
            return response()->json($result, 200);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    public function getSubmission($id)
    {

        if (!is_numeric($id)) {
            return response()->json(['error' => 'Submission ID must be a number'], 400);
        }

        try {
            $connector = new ConnectorService();
            $result = $connector->sendRequest('GET', '/submissions/' . $id, null, null);
            return response()->json($result, 200);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    public function SubmissionsList($id)
    {
        try {
            $connector = new ConnectorService();
            $result = $connector->sendRequest('GET', '/submissions', ['template_id' => $id], null);
            return $result;
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

}
