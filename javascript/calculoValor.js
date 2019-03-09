var trDadosProd = document.querySelectorAll(".dadosProd");

for(var i=0; i<trDadosProd.length; i++){
	var produto = trDadosProd[i];
	var quantProd = produto.querySelector(".quantProd").textContent;
	var precoProd = produto.querySelector(".precoProd").textContent;
	var peso = produto.querySelector(".pesoProd").textContent;
	var tdValorTotal = produto.querySelector(".valorTotal");
	var vPeso = validaPeso(peso), vPreco = validaPreco(precoProd);
	
	if(!vPeso && !vPreco){  
		tdValorTotal.textContent = calculaTotal(quantProd, precoProd);
	}else{
		tdValorTotal.textContent = "inválido"
		produto.classList.add("erro");
	}
}

function validaPeso(peso){
	if(peso > 0 && peso < 1000000){
	   return false;
	}
	return true;
}

function validaPreco(preco){
	if(preco > 0){
	   return false;
	}
	return true;
}
//Função que calcula o valor total do itens
function calculaTotal(quantidade, preco){
	var valorTotal = (quantidade * preco);
	return valorTotal.toFixed(2);
}