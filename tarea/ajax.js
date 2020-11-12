function prov() {
	//...
		var xhttp = new XMLHttpRequest();
        var select_pais = document.getElementById('Selectpais');
        var select_provs = document.getElementById('provincias');
        var pais = select_pais.value;
        xhttp.open("GET", "ajax.php?pais="+pais, true);
        xhttp.send();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
            	option = document.querySelectorAll("#provs");
            	for(let index = 0; index < option.length ; index++){
            		element = option[index];
            		element.remove();
            	}
                provincias = JSON.parse(this.responseText);
                

                for (const key in provincias) {
                console.log(provincias[key]);
                option = document.createElement("option");
                option.innerText = provincias[key]; 
                option.id = "provs"; 
                option.value = provincias[key];
                select_provs.appendChild(option); 
            }
            }
        };
    }
