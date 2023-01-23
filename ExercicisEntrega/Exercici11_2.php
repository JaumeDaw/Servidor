<?php
$numero = $_POST['numero_tabla'];
echo "Hola, estas en tabla.php y has introducido $numero <br><br>";

$i = 1;
while ($i <=10){
    echo "$numero * $i = ". ($numero*$i);
    echo "<hr>";
    $i++;
}
