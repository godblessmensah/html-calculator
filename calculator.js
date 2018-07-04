
(function(){
	
	let keys = document.getElementsByClassName("key");
	let equal = document.getElementById("equal");
	let clear = document.getElementById("cs");
	let screen = document.getElementById("displayscreen");

	for(let i=0; i < keys.length; i++){		
		keys[i].addEventListener("click", e => {
			screen.value += e.target.id; 
		}, false);
	}

	equal.addEventListener("click", e => {
		try{
			screen.value = eval(screen.value);
		} catch(e){}		
	}, false);


	clear.addEventListener("click", () => {
		screen.value = ""; 
	}, false);
	
})();