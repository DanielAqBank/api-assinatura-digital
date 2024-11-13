<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'AQBank') }} – Para empresas, para pessoas, para você!</title>

    <!-- Fonts and External Resources -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/nprogress@0.2.0/nprogress.css" />
    <script src="{{ asset('js/form.js') }}"></script>
    <script src="{{ asset('js/builder.js') }}"></script>
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link rel="icon" href="https://aqbank.com.br/wp-content/uploads/2024/06/Favicon.svg" sizes="32x32">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.css" rel="stylesheet" />
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script> <!-- jQuery primeiro -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.js"></script> <!-- Toastr depois -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        integrity="sha384-k6RqeWeci5ZR/Lv4MR0sA0FfDOMp3MXzEu1mi1Z6DNQvN0/f81HHSQkPg6F5eM2p" crossorigin="anonymous">
    <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">

    <!-- Scripts -->
    @vite(['resources/css/app.css', 'resources/js/app.js'])

    <!-- Toastr Custom Styles -->
    <style>
        body {
            font-family: 'Inter', sans-serif !important;
        }

        /* Toastr Success */
        .toast-success {
            background-color: #01ffcd !important;
            /* Cor de fundo verde claro (consistente com a cor principal) */
            color: #000 !important;
            /* Texto preto para contraste */
        }

        /* Toastr Error */
        .toast-error {
            background-color: #dc3545 !important;
            /* Cor de fundo vermelha */
            color: #fff !important;
            /* Texto branco */
        }

        /* Toastr Warning */
        .toast-warning {
            background-color: #ffc107 !important;
            /* Cor de fundo amarela */
            color: #000 !important;
            /* Texto preto */
        }

        /* Toastr Info */
        .toast-info {
            background-color: #17a2b8 !important;
            /* Cor de fundo azul */
            color: #fff !important;
            /* Texto branco */
        }

    </style>

    <!-- Customize o estilo do NProgress -->
    <style>
        #nprogress .bar {
            background: #29d;
            position: fixed;
            z-index: 1031;
            top: 0;
            left: 0;
            width: 100%;
            height: 2px;
        }


        #nprogress .spinner {
            position: fixed;
            z-index: 1031;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            display: none;
            /* Se não quiser o spinner */
        }

        #nprogress .spinner-icon {
            border-color: #29d transparent #29d transparent;
        }

        /* Customizando o overlay */
        #nprogress .overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
            /* Ajuste a opacidade conforme desejado */
            z-index: 1030;
            /* Deve ficar abaixo do spinner */
        }
    </style>
</head>

<body class="font-sans antialiased">
    <div class="min-h-screen bg-gray-100">
        @include('layouts.navigation')

        <!-- Flash Notifications -->
        <script>
            $(document).ready(function() {
                // Aqui você garante que o Toastr e o jQuery estão prontos
                @if (session()->has('flash_notification'))
                    let flash = @json(session('flash_notification')->toArray());
                    flash.forEach(function(notification) {
                        toastr[notification.level](notification.message, notification.title);
                    });
                @endif
            });
        </script>

        <!-- Page Heading -->
        @isset($header)
            <header class="bg-white shadow">
                <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    {{ $header }}
                </div>
            </header>
        @endisset

        <!-- Page Content -->
        <main>
            @yield('body')
        </main>
    </div>

    <!-- Bootstrap Bundle (optional for features) -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous">
    </script>

    <!-- DataTables (optional) -->
    <link rel="stylesheet" href="https://cdn.datatables.net/2.1.8/css/dataTables.dataTables.css" />
    <script src="https://cdn.datatables.net/2.1.8/js/dataTables.js"></script>

    <!-- Toastr options -->
    <script>
        toastr.options = {
            "closeButton": true,
            "progressBar": true,
            "timeOut": "5000", // 5 segundos
            "positionClass": "toast-top-right",
            "newestOnTop": true, // Faz as mensagens mais recentes aparecerem por cima
            "preventDuplicates": true, // Evita duplicação de toasts
            "showMethod": "slideDown", // Método de animação ao aparecer
            "hideMethod": "slideUp" // Método de animação ao desaparecer
        };
    </script>
    <script src="https://cdn.jsdelivr.net/npm/nprogress@0.2.0/nprogress.js"></script>
    <footer class="text-center text-black   " style="margin-top: 50px; margin-bottom: 20px;">Desenvolvido por <a
            href="https://aqbank.com.br" target="_blank">AQBank</a></footer>
</body>

</html>
