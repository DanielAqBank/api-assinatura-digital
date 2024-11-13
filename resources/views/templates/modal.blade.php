<div id="addModal" class="modal fade" role="dialog">
    <div class="modal-dialog">
        <div class="modal-content" style="border-radius: 15px; background-color: #fafafa;">
            <div class="modal-header" style="border-bottom: 2px solid #01ffcd;">
                <h5 class="modal-title" style="font-weight: bold; color: #333;">Upload Template</h5>
                <!-- Botão de fechar com X -->
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span> <!-- X personalizado -->
                </button>
            </div>
            <div class="modal-body" style="padding: 30px;">
                <form id="pdfForm" method="POST" action="{{ url('templates/createTemplateFromPdf') }}" enctype="multipart/form-data">
                    <meta name="csrf-token" content="{{ csrf_token() }}">

                    <!-- Custom file upload input -->
                    <div class="mb-4">
                        <label for="pdfInput" class="form-label" style="font-weight: 600; color: #555;">Escolha um arquivo PDF</label>
                        <input type="file" name="pdf" id="pdfInput" class="form-control" accept=".pdf" required>
                        <small class="form-text text-muted">Por favor, envie um arquivo PDF válido.</small>
                    </div>

                    <!-- Submit button -->
                    <button type="submit" class="btn" style="background-color: #01ffcd; color: #000; border-radius: 10px; width: 100%; padding: 12px; font-weight: bold; border: none;">
                        Upload
                    </button>
                </form>
            </div>
        </div>
    </div>
</div>

<!-- Add custom CSS to style the file input -->
<style>
    /* Custom file input style */
    .form-control[type="file"] {
        padding: 0.375rem 1.25rem;
        border-radius: 0.25rem;
        background-color: #f8f9fa;
        border: 1px solid #ccc;
    }

    .form-control[type="file"]:focus {
        border-color: #01ffcd;
        box-shadow: 0 0 0 0.2rem rgba(38, 143, 255, 0.25);
    }

    /* Custom button styles */
    .btn {
        border-radius: 25px;
        padding: 12px 25px;
        font-weight: bold;
        transition: background-color 0.3s ease, color 0.3s ease;
    }

    .btn:hover {
        background-color: #00a686;
        color: #fff;
    }

    /* Close button styles */
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

    .modal-body {
        padding: 30px;
    }

    /* Modal Header Styles */
    .modal-header {
        background-color: #fafafa;
        border-bottom: 2px solid #01ffcd;
        padding: 15px;
    }

    /* Responsiveness for smaller screens */
    @media (max-width: 768px) {
        .modal-dialog {
            max-width: 90%;
        }

        .modal-content {
            padding: 10px;
        }

        .modal-header {
            padding-bottom: 10px;
        }
    }
</style>

<script>
    $(document).ready(function() {
        $('#pdfForm').on('submit', function(e) {
            e.preventDefault();
            var formData = new FormData(this);
            $('#addModal').modal('hide');
            $.ajax({
                url: '{{ url("templates/createTemplateFromPdf") }}',
                type: 'POST',
                data: formData,
                processData: false,
                contentType: false,
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                },
                success: function(response) {
                    console.log('Resposta da API:', response);
                    window.location.href = '/templates';
                },
                error: function(xhr, status, error) {
                    console.error('Erro:', error);
                    alert('Houve um erro ao tentar enviar o PDF.');
                }
            });
        });
    });
</script>
