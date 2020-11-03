function datos() {
	// consigna 8 introduce su datos y tira un saludo...
	

	var nombre, apellido, sal;
	nombre=document.getElementById('nombre').value;
	apellido=document.getElementById('apellido').value;
	sal="hola" + " " +nombre+"," +apellido;
	document.getElementById('saludo').innerHTML=sal;


}