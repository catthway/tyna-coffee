// Mostra uma mensagem de boas-vindas dependendo da hora do dia
window.onload = function() {
    const hours = new Date().getHours();
    let message = '';

    if (hours < 12) {
        message = 'Bom dia! Que tal começar com um café?';
    } else if (hours < 18) {
        message = 'Boa tarde! Uma pausa para um café?';
    } else {
        message = 'Boa noite! Que tal relaxar com um café?';
    }

    alert(message);
};