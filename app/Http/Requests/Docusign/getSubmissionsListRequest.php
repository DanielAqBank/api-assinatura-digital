<?php

namespace App\Http\Requests\Docusign;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Contracts\Validation\Validator;

class getSubmissionsListRequest extends FormRequest
{

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'template_id' => 'integer',
            'q' => 'string',
            'template_folder' => 'string',
            'limit' => 'integer',
            'after' => 'string',
            'before' => 'string'
        ];
    }

    public function failedValidation(Validator $validator)

    {

        throw new HttpResponseException(response()->json([

            'success'   => false,

            'message'   => 'Validation errors',

            'data'      => $validator->errors()

        ], 400));

    }



    public function messages()

    {

        return [

            'template_id.integer' => 'Template ID must be an integer',

            'q.string' => 'Q must be a string',

            'template_folder.string' => 'Template folder must be a string',

            'limit.integer' => 'Limit must be an integer',

            'after.string' => 'After must be a string',

            'before.string' => 'Before must be a string'

        ];

    }
}
