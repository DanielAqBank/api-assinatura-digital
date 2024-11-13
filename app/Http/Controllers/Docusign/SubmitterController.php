<?php

namespace App\Http\Controllers\Docusign;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Services\Docusign\ConnectorService;
class SubmitterController extends Controller
{
    public function getSubmitterId(){

    }

    public function getSubmitters(Request $request){
        $validated = $request->validate([
            'submission_id' => 'integer',
            'q' => 'string',
            'completed_after' => 'string',
            'completed_before' => 'string',
            'external_id' => 'string',
            'limit' => 'integer',
            'after' => 'integer',
            'before' => 'integer'
        ]);

        try {
            $connector = new ConnectorService();
            $result = $connector->sendRequest('GET', '/submitters', $validated, null);
            return response()->json($result, 200);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }


    public function updateSubmitter(){

    }

}
