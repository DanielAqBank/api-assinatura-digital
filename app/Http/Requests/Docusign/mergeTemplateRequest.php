<?php

namespace App\Http\Requests\Docusign;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Contracts\Validation\Validator;

class mergeTemplateRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'template_ids' => 'required|array',
            'name' => 'string',
            'folder_name' => 'string',
            'external_id' => 'string',
        ];
    }
    public function failedValidation(Validator $validator)
    {
        throw new HttpResponseException(response()->json(['success' => false, 'message' => 'Validation errors', 'data' => $validator->errors()]));
    }
    public function messages()
    {
        return [
            'template_ids.required' => 'Template IDs are required',
            'template_ids.array' => 'Template IDs must be an array',
            'name.string' => 'Name must be a string',
            'folder_name.string' => 'Folder name must be a string',
            'external_id.string' => 'External ID must be a string',
        ];
    }
}
