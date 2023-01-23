<?php
$nombre = "Jaume";
$ape = "Bañuls Orovay";
$cadena1 = "hola a todo el mundo ";
$cadena2 = "mi nombre es $nombre $ape";

$cadena3 = $cadena1 . $cadena2;
echo "Cadena 3 " . $cadena3 . "<br>";

$cadena1 = $cadena1 . $cadena2;
echo "Cadena 1 " . $cadena1;
