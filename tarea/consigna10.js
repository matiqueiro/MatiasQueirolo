function botones() {
	// body...
	for (var i = 0; i < document.bot.input_radio.length; i++) {
		if (document.bot.input_radio[i].checked) {
			alert(""+document.bot.input_radio[i].value);
		}		
	}
}