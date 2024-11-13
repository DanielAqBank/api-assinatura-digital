<?php

namespace App\Http\Requests\Docusign;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Contracts\Validation\Validator;

class getTemplatesAllRequest extends FormRequest
{

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'q' => 'string',
            'external_id' => 'string',
            'folder' => 'string',
            'archived' => 'boolean',
            'limit' => 'integer',
            'after' => 'string',
            'before' => 'string',
        ];
    }
    public function failedValidation(Validator $validator)
    {
        throw new HttpResponseException(response()->json(['success' => false, 'message' => 'Validation errors', 'data' => $validator->errors()]));
    }
    public function messages()
    {
        return [
            'q.string' => 'Query must be a string',
            'external_id.string' => 'External ID must be a string',
            'folder.string' => 'Folder must be a string',
            'archived.boolean' => 'Archived must be a boolean',
            'limit.integer' => 'Limit must be an integer',
            'after.string' => 'After must be a string',
            'before.string' => 'Before must be a string',
        ];
    }
}
