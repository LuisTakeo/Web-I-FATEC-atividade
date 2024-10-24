const inputName = document.querySelector('#name');
const inputPassword = document.querySelector('#pass');

const button = document.querySelector('#enviar');

function verificarSenhaCorreta(event)
{
	event.preventDefault();
	const name = inputName.value;
	const password = inputPassword.value;

	if (password === '1234')
		alert('Senha correta');
	else
		alert('Senha incorreta');


}

button.addEventListener('click', verificarSenhaCorreta);