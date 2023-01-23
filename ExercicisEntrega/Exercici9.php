<?php

$nom = "Jaume ";
$cog = "Bañuls Orovay";

$num1 = 2;
$num2 = 2;

if($num1 > 0 && $num2 < $num1){
    echo $nom;
}elseif ($num1 > 0 && $num2 >= $num1){
    echo $cog;
}elseif($num1<0){
    echo $nom . $cog;
}
