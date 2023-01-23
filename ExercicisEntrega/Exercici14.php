<?php

$numero = 10;
$divisor = 0;

echo "Eix:  $numero <br>";

while($divisor<=$numero){
    $divisor++;
    if(($numero % $divisor) == 0){
        echo "$divisor, ";
    }
    
}

?>
