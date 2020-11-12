<?php 
 
$pais = $_GET["pais"];
 


 $provincias_argentinas = array(
    "Buenos Aires","Catamarca","Chaco","Chubut","Córdoba","Corrientes","Entre Ríos","Formosa"
    ,"Jujuy","La Pampa","La Rioja","Mendoza","Misiones","Neuquén","Río Negro","Salta","San Juan","San Luis","Santa Cruz",
    "Santa Fe","Santiago del Estero","Tierra del Fuego, Antártida e Islas del Atlántico Sur","Tucumán"
);


$provincias_uruguayas = array(
    "Artigas","Canelones","Cerro Largo","Durazno","Colonia","Flores","Florida","Lavalleja"
    ,"Colonia","Maldonado","Montevideo","Paysandú","Rio Negro","Rivera","Rocha","Salto","San Jose","Tacuarembó","Treinta y tres",
    "Soriano"
);
 $provincias = array();
  if ($pais == "Arg") {
   	# si se cumple.
   	$provincias = $provincias_argentinas;
   }
   else {
   	$provincias = $provincias_uruguayas;
   } 
   $provincias = (object) $provincias;
   echo json_encode ($provincias); ?>