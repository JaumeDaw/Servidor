<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class PostRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'titol' => 'required|min:5',
            'contingut' => 'required|min:50'
        ];
    }
    public function messages()
    {
        return [
            'titol.required' => 'El titol és obligatori',
            'contingut.required' => 'El contingut és obligatori',
            'titol.min' => 'El titol ha de tenir almenys 5 caràcters',
            'contingut.min' => 'El contingut ha de tenir almenys 50 caràcters'
        ];
    }
}
