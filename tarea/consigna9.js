function calcuedad() {
	// consigna 9...
	var edad= document.getElementById('edad').value;
	x=2020;
	var res= parseInt(x) - parseInt(edad);
	document.getElementById('resultado').innerHTML = "tienes:" +"" +res+ " " +"años";

}