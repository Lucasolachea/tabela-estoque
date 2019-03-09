var botao = document.querySelector("#botao_principal");

//Botao para adicionar produtos
botao.addEventListener('click', function(event){
	event.preventDefault();
	var form = document.querySelector("#form");
	var produto = ObtemDadosForm(form);
	var erros = validaProdForm(produto);
	
	if(erros.length > 0){
	   mostraErro(erros);
	   return;		
	}
	
	addTabela(produto);
	
	var limpaErro = document.querySelector("#ul_erro");
	limpaErro.innerHTML = "";
	form.reset();
});

//Adicionar tr criado na tabela
function addTabela(produto){
	var tabela = document.querySelector("#bodyTab");
	tabela.appendChild(criaTr(produto));
}

function ObtemDadosForm(form){
	var produto = {
		nome:form.nomeProduto.value,
		peso:form.pesoProd.value,
		quantidade:form.quantProd.value,
		preco:form.precoProd.value,
		valorTotal:calculaTotal(form.quantProd.value, form.precoProd.value)
	};
	return produto;
}

function criaTr(produto){
	var trProduto = document.createElement("tr");
	trProduto.classList.add("dadosProd");
	
	trProduto.appendChild(criaTd(produto.nome, "nomeProd"));
	trProduto.appendChild(criaTd(produto.peso, "pesoProd"));
	trProduto.appendChild(criaTd(produto.quantidade, "quantProd"));
	trProduto.appendChild(criaTd(produto.preco, "precoProd"));
	trProduto.appendChild(criaTd(produto.valorTotal, "valorTotal"));
	
	return trProduto;
}

function criaTd(dado, classe){
	var tdProduto = document.createElement("td");
	tdProduto.textContent = dado;
	tdProduto.classList.add(classe);
	
	return tdProduto;
}

function validaProdForm(produto){
	var erros = [];
	
	if(produto.nome.length == 0){
	   erros.push("Preencha o nome do produto");
	}
	
	if(produto.peso.length == 0){
	   erros.push("Preencha o peso do produto");
	}else if(validaPeso(produto.peso)){
	   erros.push("Peso inválido");
	}
	
	if(produto.quantidade.length == 0){
	   erros.push("Preencha a quantidade do produto");
	}
	
	if(produto.preco.length == 0){
	   erros.push("Preencha o preço do produto");
	}else if(validaPreco(produto.preco)){
	   erros.push("Preço inválido");
	}
		
	
	
	return erros;
}

function mostraErro(erros){
	var ul = document.querySelector("#ul_erro");
	ul.innerHTML = "";
	erros.forEach(function(erro){
		var li = document.createElement("li");
		li.textContent = erro;
		ul.appendChild(li);
	});
}