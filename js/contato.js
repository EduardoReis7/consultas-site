function validaNome() {
    var nome = formulario.nome;

    if (nome.value == "") {
        alert("Necessário preencher o campo *Nome");

        nome.focus();
    }
}

function validaEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }
      
  console.log(validateEmail('texto@texto.com')); // aceitar
  console.log(validateEmail('texto@texto')); // ñ aceitar
  console.log(validateEmail('texto.com')); // ñ aceitar
  console.log(validateEmail('texto')); // ñ aceitar