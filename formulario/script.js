// Obtenha uma referência aos elementos do formulário
const form = document.querySelector('#meu-formulario');
const apelidoInput = document.querySelector('#apelido');
const nomeInput = document.querySelector('#nome');
const dataNascInput = document.querySelector('#data-nascimento');
const provinciaInput = document.querySelector('#provincia');
const sexoInputs = document.querySelectorAll('input[name="sexo"]');
const observacaoInput = document.querySelector('#observacao');

// Adicione um evento de clique ao botão de envio
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Impedir o envio do formulário padrão

  let formularioValido = true; // Mantém o controle se o formulário é válido

  // Verificar se o campo do apelido foi preenchido
  if (apelidoInput.value.trim() === '') {
    formularioValido = false;
    apelidoInput.style.borderColor = 'red';
  } else {
    apelidoInput.style.borderColor = 'green';
  }

  // Verificar se o campo do nome foi preenchido
  if (nomeInput.value.trim() === '') {
    formularioValido = false;
    nomeInput.style.borderColor = 'red';
  } else {
    nomeInput.style.borderColor = 'green';
  }

  // Verificar se o campo da data de nascimento foi preenchido
  if (dataNascInput.value.trim() === '') {
    formularioValido = false;
    dataNascInput.style.borderColor = 'red';
  } else {
    dataNascInput.style.borderColor = 'green';
  }

  // Verificar se o campo da província foi selecionado
  if (provinciaInput.value === '') {
    formularioValido = false;
    provinciaInput.style.borderColor = 'red';
  } else {
    provinciaInput.style.borderColor = 'green';
  }

  // Verificar se um dos sexos foi selecionado
  let sexoSelecionado = false;
  for (const sexoInput of sexoInputs) {
    if (sexoInput.checked) {
      sexoSelecionado = true;
      break;
    }
  }
  if (!sexoSelecionado) {
    formularioValido = false;
    sexoInputs[0].parentNode.style.borderColor = 'red';
  } else {
    for (const sexoInput of sexoInputs) {
      sexoInput.parentNode.style.borderColor = 'green';
    }
  }

  // Verificar se o campo de observação foi preenchido
  if (observacaoInput.value.trim() === '') {
    formularioValido = false;
    observacaoInput.style.borderColor = 'red';
  } else {
    observacaoInput.style.borderColor = 'green';
  }

  // Mostrar mensagem de sucesso ou erro
  if (formularioValido) {
    alert('Formulário enviado com sucesso!');
    // Redefinir o formulário
    form.reset();
    // Redirecionar o foco para o primeiro campo do formulário
    apelidoInput.focus();
  } else {
    alert('Preencha todos os campos obrigatórios!');
  }
});
