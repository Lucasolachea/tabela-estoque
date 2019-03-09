var input = document.querySelector("#filtrar");

input.addEventListener('input', function(){
	var produtos = document.querySelectorAll(".dadosProd");
	
	if(this.value.length > 0){
		for(var i=0; i<produtos.length; i++){
			var produto = produtos[i];
			var nomeProd = produto.querySelector(".nomeProd").textContent;
			
			var expressao = new RegExp(this.value, "i");
			
			if(!expressao.test(nomeProd)){
			   produto.classList.add("some");
			}else{
				produto.classList.remove("some");
			}
		}
	}else{
		for(var i=0; i<produtos.length; i++){
			var produto = produtos[i];
			produto.classList.remove("some");
		}
	}
});