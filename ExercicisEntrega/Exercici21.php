<?php

$numero = 10;
echo $numero . "<br>Divisors: ";
for($i = 1; $i<=$numero; $i++){
    if(($numero % $i) == 0 ){
        if($i == $numero){
            echo $i;
        }else{
            echo  $i . ",";
        }
        
    }
}



