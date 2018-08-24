//pego todos os pacientes

var pacientes = document.querySelectorAll(".paciente");


var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event) {
    console.log(event.target);
    

	if (event.target.tagName == 'TD') {
		event.target.parentNode.classList.add("fadeOut");
	    //aguarda um tempo para remover
	    setTimeout(function () {
	    	
	    		event.target.parentNode.remove();		
	    	
	      	
	    },500);
	}    
    
});

