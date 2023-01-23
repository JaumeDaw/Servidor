<?php

$num  = 15;
$i = 1;
$cont = 0;
while($i<=$num){
    if($num % $i == 0){
        $cont++;
    }
    $i++;
}

if($cont == 2 || $num == 1 || $num == 0){
    echo "$num es primo";
}else{
    echo "$num no es primo";
}

