<?php

namespace App\Http\Requests\Docusign;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Contracts\Validation\Validator;

class updateTemplateRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'id' => 'required|string',
            'name' => 'string',
            'folder_name' => 'string',
            'archived' => 'boolean',
            'roles' => 'array',
        ];
    }
    public function failedValidation(Validator $validator)
    {
        throw new HttpResponseException(response()->json(['success' => false, 'message' => 'Validation errors', 'data' => $validator->errors()]));
    }
    public function messages()
    {
        return [
            'id.required' => 'ID is required',
            'id.string' => 'ID must be a string',
            'name.string' => 'Name must be a string',
            'folder_name.string' => 'Folder name must be a string',
            'archived.boolean' => 'Archived must be a boolean',
            'roles.array' => 'Roles must be an array',
        ];
    }
}
