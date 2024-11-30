document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.botao').forEach(function (button) {
        button.addEventListener('click', function () {
            alert('Esgotado');
        });
    });

    document.getElementById('welcomeButton').addEventListener('click', function() {
        alert('Você clicou no botão "Saiba mais"!');
    });

    
});


