const inputName = document.querySelector('#name');
const inputGrade = document.querySelector('#grade');
const inputFaltas = document.querySelector('#faltas');

const button = document.querySelector('#enviar');

function calcularNota(event)
{
	e.preventDefault();
	const name = inputName.value;
	const grade = parseInt(inputGrade.value);
	const faltas = parseInt(inputFaltas.value);

	if (grade > 10 || grade < 0)
	{
		alert('A nota deve ser entre 0 e 10');
		return;
	}
	if (faltas < 0)
	{
		alert('As faltas não podem ser negativas');
		return;
	}
	if (faltas <= 20 && grade >= 7)
		alert(`${name} foi aprovado`);
	else if (faltas > 20 || grade < 7)
		alert(`${name} foi reprovado`);
}

button.addEventListener('click', calcularNota);