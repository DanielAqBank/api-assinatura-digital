@extends('layouts.app')
@section('body')

<div class="container my-5">
    <div class="card shadow-lg" style="border-radius: 10px; background-color: #fafafa;">
        <div class="card-header d-flex justify-content-between align-items-center flex-wrap" style="background-color: #fafafa; border-radius: 15px 15px 0 0;">
            @include('templates.modal')
            <button type="button" class="btn" style="margin: 10px; background-color: #01ffcd; color: #000; border-radius: 10px; padding: 20px 20px; width: 100%;" data-bs-toggle="modal" data-bs-target="#addModal">
                <i class="fa fa-upload me-2"></i> Upload
            </button>
        </div>

        <div class="card-body">
            <div class="table-responsive" style="border-radius: 10px; margin: 10px;">
                <table id="templatesTable" class="table table-bordered table-hover w-100" style="border-radius: 15px;">
                    <thead class="table-dark" style="background-color: #01ffcd; color: #fff; font-size: 1.2rem;">
                        <tr>
                            <th style="font-size: 16px; font-weight: 700;">ID</th>
                            <th style="font-size: 16px; font-weight: 700;">Nome</th>
                            <th style="font-size: 16px; font-weight: 700;">Criado em</th>
                            <th style="font-size: 16px; font-weight: 700;">Status</th>
                            <th style="width: 10%; font-size: 16px; font-weight: 700; text-align: center;">Opções</th>
                        </tr>
                    </thead>
                    <tbody>
                        @foreach ($templates as $template)
                            <tr style="border-radius: 10px;">
                                <td style="font-size: 14px; color: #616e6b;">{{ $template['id'] }}</td>
                                <td style="font-size: 14px; color: #616e6b;">{{ $template['name'] }}</td>
                                <td style="font-size: 14px; color: #616e6b;">{{ \Carbon\Carbon::parse($template['created_at'])->format('d/m/Y') }}</td>
                                <td style="font-size: 14px; color: #616e6b;">
                                    @if($template['status'] == 'Vazio')
                                        <span class="badge bg-danger text-white" title="Não há submissões">
                                            Não há submissões
                                        </span>
                                    @elseif($template['status'] == 'pending')
                                        <span class="badge bg-warning text-black" title="Pronto para Assinar">
                                            Pronto para Assinar
                                        </span>
                                    @elseif($template['status'] == 'completed')
                                        <span class="badge bg-success text-white" title="Assinado">
                                            Assinado
                                        </span>
                                    @endif
                                </td>
                                <td>
                                    <div class="btn-group d-flex justify-content-center align-items-center gap-2" role="group" aria-label="Options">
                                        <form action="{{ route('templates.edit', $template) }}" method="POST" style="display: inline;">
                                            @csrf
                                            <button type="submit" class="btn btn-icon" title="Editar Template">
                                                <i class="fa fa-cog"></i>
                                            </button>
                                        </form>
                                        <a href="{{ route('templates.archive', ['id' => $template['id']]) }}" class="btn btn-icon" title="Arquivar">
                                            <i class="fa fa-trash"></i>
                                        </a>
                                        <a href="#" class="btn btn-icon" data-bs-toggle="modal" data-bs-target="#addsignModal"
                                           data-template-id="{{ $template['id'] }}" data-template-slug="{{ $template['slug'] }}" title="Assinar Documento">
                                            <i class="fa fa-file-signature"></i>
                                        </a>
                                        <a href="{{ route('templates.clone', ['id' => $template['id']]) }}" class="btn btn-icon" title="Clonar Template">
                                            <i class="fa fa-clone"></i>
                                        </a>
                                    </div>
                                </td>
                            </tr>
                        @endforeach
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>

<style>
    .badge {
        border-radius: 10px;
        font-weight: 700;
        font-size: 14px;
        padding: 10px 15px;
    }
    .badge-warning {
        background-color: #ffc107 !important;
    }
    .badge-success {
        background-color: #28a745 !important;
    }
    .badge-danger {
        background-color: #dc3545 !important;
    }
    /* btn hover */
    .btn:hover {
        background-color: #00a686 !important;
    }

    /* Estilo para botões de opções com ícones */
    .btn-group .btn-icon {
        display: inline-block;
        background-color: #01ffcd;
        color: #000;
        border-radius: 10px; /* Bordas arredondadas de 10px */
        width: 35px; /* Tornando o botão quadrado */
        height: 35px;
        padding: 0;
        transition: background-color 0.3s ease;
        text-decoration: none;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    /* Hover effect */
    .btn-group .btn-icon:hover {
        background-color: #00a686;
    }

    /* Ícones */
    .btn-group .btn-icon i {
        font-size: 14px;
    }

    /* Ajuste no botão de upload */
    .btn {
        border-radius: 25px;
        padding: 10px 20px;
    }

    /* Responsividade */
    @media (max-width: 768px) {
        .btn-group .btn-icon {
            width: 40px;
            height: 40px;
            font-size: 14px;
        }
        .btn {
            padding: 8px 16px;
            font-size: 0.9rem;
        }
    }
</style>

<!-- Modal de Adicionar Assinatura -->
<div class="modal fade" id="addsignModal" tabindex="-1" aria-labelledby="addsignModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="addsignModalLabel">Assinar Documento</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
                    <i class="fa-solid fa-circle-xmark" style="color: #63E6BE;"></i>
                </button>
            </div>
            <div class="modal-body">
                <docuseal-form id="docusealForm"></docuseal-form>
            </div>
        </div>
    </div>
</div>

<style>
    /* Custom button styles for closing the modal */
    .btn-close {
        background: none;
        border: none;
        color: #000;
        font-size: 1.5rem;
        font-weight: bold;
    }

    .btn-close:hover {
        color: #dc3545; /* Red color on hover */
    }

    /* Modal header styling */
    .modal-header {
        padding: 1rem;
        border-bottom: 1px solid #dee2e6;
    }

    .modal-body {
        padding: 20px;
    }
</style>

<script>
    $(document).ready(function() {
        $('#templatesTable').DataTable({
            responsive: true,
            lengthChange: false,
            ordering: false,
            order: [[3, 'desc']],
            pageLength: 5,
            language:{
                paginate:{
                    next: 'Próximo',
                    previous: 'Anterior'
                },
                search: 'Pesquisar:',
                emptyTable: 'Nenhum registro encontrado',
                lengthMenu: 'Mostrar _MENU_ registros por página',
                zeroRecords: 'Nenhum registro encontrado',
                info: 'Mostrando página _PAGE_ de _PAGES_',
                infoEmpty: 'Nenhum registro disponível',
                infoFiltered: '(filtrado de _MAX_ registros no total)'
            }
        });
    });
</script>
<script>
    document.addEventListener('DOMContentLoaded', function() {
        const addSignModal = document.getElementById('addsignModal');
        const docusealForm = document.getElementById('docusealForm');

        addSignModal.addEventListener('show.bs.modal', function(event) {
            const button = event.relatedTarget;
            const templateSlug = button.getAttribute('data-template-slug');
            docusealForm.setAttribute('data-src', `https://docuseal.com/d/${templateSlug}`);
        });

        docusealForm.addEventListener('completed', (event) => {
            console.log('Assinatura completada:', event.detail);
        });
    });
</script>
@endsection
