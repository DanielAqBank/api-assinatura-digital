<?php
namespace App\Http\Services\Docusign;
use Illuminate\Http\Request;

class ConnectorService
{
    protected $token;
    protected $url;

    public function __construct()
    {
        $this->url = env('DOCUSEAL_URL');
        $this->token = env('DOCUSEAL_TOKEN');
    }

    public function sendRequest($method, $path, $getParams = [], $postParams = [])
    {
        if (!function_exists('curl_init')) {
            return ['Error' => 'cURL extension is disabled on your server'];
        }

        $url = $this->url . $path;

        // Configuração dos parâmetros GET
        if (($method === 'GET' || $method === 'DELETE') && !empty($getParams)) {
            $url .= '?' . http_build_query($getParams);
        }

        $ch = curl_init();

        // Configuração do método HTTP
        curl_setopt($ch, CURLOPT_CUSTOMREQUEST, $method);

        // Configuração dos parâmetros POST/PUT
        if (($method === 'POST' || $method === 'PUT') && !empty($postParams)) {
            curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($postParams));
        }

        // Configuração da URL e retorno
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

        // Configuração do cabeçalho
        $headers = [
            'Accept: application/json',
            'X-Auth-Token: ' . $this->token,
            'Content-Type: application/json'
        ];
        curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);

        // Execução e tratamento de erros
        $result = curl_exec($ch);
        if (curl_errno($ch)) {
            $errorMessage = 'cURL Error: ' . curl_error($ch);
            curl_close($ch);
            return ['Error' => $errorMessage];
        }

        curl_close($ch);

        // Decodifica e retorna o resultado
        return json_decode($result, true);
    }

    public function getApiKey()
    {
        return $this->token;
    }

}
