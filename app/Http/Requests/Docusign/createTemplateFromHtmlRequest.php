<?php

namespace App\Http\Requests\Docusign;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Contracts\Validation\Validator;

class createTemplateFromHtmlRequest extends FormRequest
{


    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'html' => 'required|string',
            'html_header' => 'string',
            'html_footer' => 'string',
            'name' => 'string',
            'size' => 'string',
            'external_id' => 'string',
            'folder_name' => 'string',
            'documents' => 'array',
        ];
    }
    public function failedValidation(Validator $validator)
    {
        throw new HttpResponseException(response()->json(['success' => false, 'message' => 'Validation errors', 'data' => $validator->errors()]));
    }
    public function messages()
    {
        return [
            'html.required' => 'HTML is required',
            'html.string' => 'HTML must be a string',
            'html_header.string' => 'HTML header must be a string',
            'html_footer.string' => 'HTML footer must be a string',
            'name.string' => 'Name must be a string',
            'size.string' => 'Size must be a string',
            'external_id.string' => 'External ID must be a string',
            'folder_name.string' => 'Folder name must be a string',
            'documents.array' => 'Documents must be an array',
        ];
    }
}
