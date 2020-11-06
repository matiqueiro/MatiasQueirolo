function calcuedad() {
	// consigna 9...
	let edad= document.getElementById('edad').value;
	let año= new Date();

	let res= año.getFullYear() - edad;
	document.getElementById('resultado').innerHTML = "tienes:" +"" +res+ " " +"años";

}
