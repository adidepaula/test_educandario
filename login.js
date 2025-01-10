
const usuarios = [
    { username: 'pedro.ferreira', password: 'senha123' },
    { username: 'admin', password: 'admin123' }
];

const loginForm = document.getElementById('loginForm');
const errorMessage = document.getElementById('errorMessage');

loginForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;


    if (!username || !password) {
        mostrarErro('Por favor, preencha todos os campos!');
        return;
    }


    const usuarioEncontrado = usuarios.find(user =>
        user.username === username && user.password === password
    );

    if (usuarioEncontrado) {

        alert('Login realizado com sucesso!');

        errorMessage.style.display = 'none';
    } else {

        mostrarErro('Usuário ou senha incorretos!');
    }
});


function mostrarErro(mensagem) {
    errorMessage.textContent = mensagem;
    errorMessage.style.display = 'block';


    setTimeout(() => {
        errorMessage.style.display = 'none';
    }, 3000);
}


document.getElementById('username').addEventListener('input', () => {
    errorMessage.style.display = 'none';
});

document.getElementById('password').addEventListener('input', () => {
    errorMessage.style.display = 'none';
});
