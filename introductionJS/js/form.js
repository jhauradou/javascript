var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event){
	event.preventDefault();
    
    //pega o formulario
    var form = document.querySelector("#form-adiciona");

    //Extraindo informacoes do paciente do form
    var paciente = obtemPacienteDoFormulario(form);
    console.log(paciente);

    
    // Cria a tr e a td do paciente
    var pacienteTr = montaTr(paciente);

    var erros = validaPaciente(paciente);
    if (erros.length > 0) {
        exibeMensagensDeErro(erros);
       return;
    }


    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);

    adicionaPacienteNaTabela(paciente);

    form.reset();

    var mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = " "; //limpa ul

});

function validaPaciente(paciente){

    var erros = [];

    if (paciente.nome.length == 0) erros.push("O nome não pode ser em branco");

    if (paciente.gordura.length == 0) erros.push("A gordura não pode ser em branco");

    if (paciente.peso.length == 0) erros.push("O peso não pode ser em branco");

    if (paciente.altura.length == 0) erros.push("A altura não pode ser em branco");

    if(!validaPeso(paciente.peso)) erros.push("Peso é inválido");

    if (!validaAltura(paciente.altura)) erros.push("Altura é inválido");

    return erros;    
}

function exibeMensagensDeErro(erros){
    var ul = document.querySelector("#mensagens-erro");

    if(ul.length > 0) ul.innerHTML =" ";

    erros.forEach(function(erro){
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}

function obtemPacienteDoFormulario(form){

    var paciente = {

        nome: form.nome.value,
        peso: form.peso.value,     
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.altura.value, form.peso.value)

    }

    return paciente;
}

function montaTd(dado,classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

function montaTr(paciente) {
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");


    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso,"info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura,"info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura,"info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc,"info-imc"));


    return pacienteTr;
}


function adicionaPacienteNaTabela(paciente){

    var pacienteTr = montaTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}


    /*nomeTd.textContent =montaTd(paciente.nome, "info-nome");
    pesoTd.textContent = montaTd(paciente.peso,"info-peso");
    alturaTd.textContent = montaTd(paciente.altura,"info-altura");
    gorduraTd.textContent = montaTd(paciente.gordura,"info-gordura");
    imcTd.textContent = montaTd(paciente.imc,"info-imc");*/


/*    var nome = form.nome.value;
    var peso = form.peso.value;     
    var altura = form.altura.value;
    var gordura = form.gordura.value;*/


/*    var pacienteTr = document.createElement("tr");
    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");

    //atribui valores
    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;
    console.log(peso+" - "+altura);
    imcTd.textContent = calculaImc(peso,altura);
    

    //adiciona as colunas a linha
    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);*/