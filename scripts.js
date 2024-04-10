const buttonFormulario = document.querySelector('button-cadastro');



function mostreFormulario() {
    var formulario = document.getElementById("formulario");
    formulario.style.display = "block";
  }
    

buttonFormulario.addEventListener('click', mostreFormulario);
