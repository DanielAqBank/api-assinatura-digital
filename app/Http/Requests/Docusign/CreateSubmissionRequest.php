<?php

namespace App\Http\Requests\Docusign;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Contracts\Validation\Validator;

class CreateSubmissionRequest extends FormRequest
{

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'template_id' => 'required|integer',
            'send_email' => 'boolean',
            'send_sms' => 'boolean',
            'order' => 'string',
            'completed_redirect_url' => 'string',
            'bcc_completed' => 'string',
            'reply_to' => 'string',
            'expire_at' => 'string',
            'message' => 'object'
        ];
    }

    public function failedValidation(Validator $validator)
    {
        throw new HttpResponseException(response()->json(['success' => false, 'message' => 'Validation errors', 'data' => $validator->errors()]));
    }

    public function messages()
    {
        return [
            'template_id.integer' => 'Template ID must be an integer',
            'send_email.boolean' => 'Send email must be a boolean',
            'send_sms.boolean' => 'Send sms must be a boolean',
            'message.object' => 'Message must be an object',
            'order.string' => 'Order must be a string',
            'completed_redirect_url.string' => 'Completed redirect URL must be a string',
            'bcc_completed.string' => 'Bcc completed must be a string',
            'reply_to.string' => 'Reply to must be a string',
            'expire_at.string' => 'Expire at must be a string'
        ];
    }
}
