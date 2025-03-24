const nameInput = document.getElementById('name');
const messageP = document.getElementById('message');
const clearButton = document.getElementById('clearButton');  // Referência ao botão Limpar

// Função que exibe a mensagem "Hello World, nome!"
const helloWorld = () => {
    const name = nameInput.value.trim();  // Remove espaços antes e depois do nome
    if (name !== '') {
        messageP.innerText = `Hello World, ${name}!`;
    } else {
        messageP.innerText = '';  // Se o campo estiver vazio, não exibe a mensagem
    }
}

// Limpar a mensagem e o campo de texto
const clearFields = () => {
    nameInput.value = '';
    messageP.innerText = '';
}

// Evento de pressionamento de tecla
nameInput.onkeyup = (event) => {
    // Se o campo de texto estiver vazio, limpa a mensagem
    if (nameInput.value === '') {
        messageP.innerText = '';
    }
    // Exibir a mensagem ao pressionar Enter
    if (event.key === 'Enter') {
        helloWorld();
    }
    // Limpar a mensagem ao pressionar Esc
    if (event.key === 'Escape') {
        clearFields();
    }
}

// Evento de clique no botão Limpar
clearButton.onclick = () => {
    clearFields();
}
