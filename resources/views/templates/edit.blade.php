@extends('layouts.app')

@section('body')
<script src="{{ asset('js/builder.js') }}"></script>

<div class="container my-5 top-50">
    <div class="card shadow-lg" style="border-radius: 15px; background-color: #fafafa;">
        <div class="card-body">
            <!-- Botão Voltar -->
            <a href="{{ url('/templates') }}" class="btn" id="btnVoltar"
            style="background-color: #01ffcd; color: #000; border-radius: 25px; padding: 12px 25px; font-weight: bold; text-decoration: none;">
                <i class="fa fa-arrow-left me-2"></i> Voltar
            </a>

            <!-- Builder Component -->
            <div class="row mt-4">
                <div class="col-md-12">
                    <docuseal-builder data-token="{{ $token }}"></docuseal-builder>
                </div>
            </div>
        </div>
    </div>
</div>


<!-- Estilos para o botão Voltar -->
<style>
    .btn {
        border-radius: 25px;
        padding: 12px 25px;
        font-weight: bold;
        transition: background-color 0.3s ease, color 0.3s ease;
    }

    /* Hover effect for the "Voltar" button */
    .btn:hover {
        background-color: #00a686;
        color: #fff;
    }

    /* Card Style */
    .card {
        border-radius: 15px;
        background-color: #fafafa;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    }

    /* Spacing around the builder component */
    .row {
        margin-top: 20px;
    }

    /* Adding a little space around the builder */
    docuseal-builder {
        display: block;
        margin-top: 20px;
    }
</style>
<!-- Script para exibir mensagem de toast ao clicar no botão Voltar -->
<script>
    document.getElementById('btnVoltar').addEventListener('click', function(event) {
        event.preventDefault(); // Evita o redirecionamento imediato

        // Exibe a mensagem de toast
        toastr.success('Salvo com sucesso!');

        // Aguarda alguns segundos antes de redirecionar
        setTimeout(function() {
            window.location.href = "{{ url('/templates') }}";
        }, 2000); // 2 segundos de espera para o toast ser exibido
    });
</script>
@endsection
