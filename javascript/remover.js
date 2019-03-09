var tBody = document.querySelector("#bodyTab");

//Event bubble
tBody.addEventListener('dblclick', function(event){
	event.target.parentNode.classList.add("fadeOut");
	
	setTimeout(function(){
		var alvo = event.target;
		var removeAlvo = alvo.parentNode;
		removeAlvo.remove();
	}, 500);
	
	
});