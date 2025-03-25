const nameInput = document.getElementById('name');
const messageP = document.getElementById('message');
const clearButton = document.getElementById('clearButton'); 


const helloWorld = () => {
    const name = nameInput.value.trim();  
    if (name !== '') {
        messageP.innerText = `Hello World, ${name}!`;
    } else {
        messageP.innerText = '';  
    }
}


const clearFields = () => {
    nameInput.value = '';
    messageP.innerText = '';
}


nameInput.onkeyup = (event) => {
   
    if (nameInput.value === '') {
        messageP.innerText = '';
    }
   
    if (event.key === 'Enter') {
        helloWorld();
    }
    
    if (event.key === 'Escape') {
        clearFields();
    }
}

// Evento de clique no botão Limpar
clearButton.onclick = () => {
    clearFields();
}
