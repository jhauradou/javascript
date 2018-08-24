var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function(){
    
    var pacientes = document.querySelectorAll(".paciente");

    if (this.value.length > 0){
        for (var i = 0; i < pacientes.length; i++){
     	   var paciente = pacientes[i];
           var tdNome = paciente.querySelector(".info-nome");
           var nome = tdNome.textContent;

           var expressao = new RegExp(this.value, "i");
        
           if (!expressao.test(nome)){
                paciente.classList.add("invisivel");
            } else {
                paciente.classList.remove("invisivel");
            }
        }
    } else {
        for (var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            paciente.classList.remove("invisivel");
        }
    }
});


/*
	CONTADOR DE CARACTERES
<body>
    <textarea id="corpo-postagem" cols="40" rows="5"></textarea>
    <p>Caracteres: <span id="numero-caracteres">0</span> caracteres.</p>
    <script src="contador.js"></script>
</body>
function atualizaCaracteres() {
    var postagem = document.querySelector("#corpo-postagem").value;
    var caracteres = postagem.length;

    var contador = document.querySelector("#numero-caracteres");
    contador.innerHTML = caracteres;
}*/


/*campoFiltro.addEventListener("input", function(){
    console.log(this.value);
    var pacientes = document.querySelectorAll(".paciente");

    if (this.value.length > 0){
        for (var i = 0; i < pacientes.length; i++){
     	   var paciente = pacientes[i];
           var tdNome = paciente.querySelector(".info-nome");
           var nome = tdNome.textContent;

                  
           if (nome != this.value){
                paciente.classList.add("invisivel");
            } else {
                paciente.classList.remove("invisivel");
            }
        }
    } else {
        for (var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            paciente.classList.remove("invisivel");
        }
    }
});




var comparavel = nome.substr(0, this.value.length);
var comparavelMinusculo = comparavel.toLowerCase();
var valorDigitadoMinusculo = this.value.toLowerCase();

if (!(valorDigitadoMinusculo == comparavelMinusculo)) {
    paciente.classList.add("invisivel");
} else{
    paciente.classList.remove("invisivel");
}


*/