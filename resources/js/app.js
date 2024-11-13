import './bootstrap';

import Alpine from 'alpinejs';

window.Alpine = Alpine;

Alpine.start();
// Inicia o NProgress quando a página começa a carregar
document.addEventListener('DOMContentLoaded', function () {
    NProgress.start();
});

// Finaliza o NProgress quando a página terminar de carregar
window.addEventListener('load', function () {
    NProgress.done();
});

// Usando NProgress em todas as requisições AJAX com jQuery
$(document).ajaxStart(function() {
    NProgress.start();
});

$(document).ajaxStop(function() {
    NProgress.done();
});
