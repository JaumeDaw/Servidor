<?php

$nota = mt_rand(1,10);
echo "La nota és " . $nota . "<br>";
/*echo "X<5 --> Suspenso<br>5-X-6 --> Aprobado<br>6-X-7 --> Bien<br>";
echo "7-X-8 --> Notable<br>8<.X --> Sobresaliente";*/

switch($nota){
    case $nota<5:
        echo "Suspenso";
        break;
    case 5<=$nota && $nota >6:
        echo "Aprobado";
        break;
    case 6<=$nota && $nota>7:
        echo "Bien";
        break;
    case 7<=$nota && $nota>8:
        echo "Notable";
        break;
    case $nota>8:
        echo "Sobresaliente";
        break;
    default:
    echo "Error";
    break;

}



