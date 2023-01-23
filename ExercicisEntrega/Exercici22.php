<?php

$num  = 5;
$cont = 0;


for($i = 1;$i <= $num; $i++){
    if($num % $i == 0){
        $cont++;
    }
}

if($cont == 2 || $num == 1 || $num == 0){
    echo "$num es primo";
}else{
    echo "$num no es primo";
}
