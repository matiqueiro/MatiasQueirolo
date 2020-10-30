function suma() {
	// consigna 5...
	var x, y, sum, res;
	x=document.getElementById('num1').value;
	y=document.getElementById('num2').value;
	sum=parseFloat(x)+parseFloat(y);
	res=sum;
	document.getElementById('sumando').innerHTML=res;

}
