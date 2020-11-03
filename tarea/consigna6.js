function random() {
	let aleatorio = [];

	function resultado(min, max) {
  		return Math.random() * (max - min) + min;
	}

	for (let i = 0; i < 10; i++) {
		let num =  Math.round(resultado(1,99));
		aleatorio.push(num);
	}

	document.getElementById('alea').innerHTML=aleatorio;
}
