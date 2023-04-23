const formImc = document.querySelector('#form-imc');
const resultado = document.querySelector('#resultado');

formImc.addEventListener('submit', function(event) {
  event.preventDefault();

  const altura = parseFloat(formImc.altura.value);
  const peso = parseFloat(formImc.peso.value);

  const imc = peso / (altura * altura);

  let classificacao = '';
  if (imc < 18.5) {
    classificacao = 'Magreza';
  } else if (imc >= 18.5 && imc < 25) {
    classificacao = 'Normal';
  } else if (imc >= 25 && imc < 30) {
    classificacao = 'Sobrepeso';
  } else {
    classificacao = 'Obesidade';
  }

  resultado.textContent = `Seu IMC é: ${imc.toFixed(2)} - ${classificacao}`;
});
