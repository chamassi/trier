(function(){

	let windowFileProtocolChange = function(c){
		window.location.href = window.location.href.replace('index.html', c);
		console.log(window.location.href)
	}


	choix = function(){
		
		let slct = document.getElementsByName('tri')[0];
		let tri = slct.value;
		let contener = document.getElementsByTagName("iframe");
		//Cacher tout les iframes avant de montrer celui choisie.
		for(let i=0; i<contener.length; i++) {
			contener[i].style.display = "none"
		}
		
		let triChoise = document.getElementById(tri);
		triChoise.style.display = "block";
	}

})();