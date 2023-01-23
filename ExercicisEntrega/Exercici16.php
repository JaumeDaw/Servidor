<?php

$num1 = 1;
$num2 = 1;
$fibo;
$i = 0;

echo $num1 . ", " . $num2;

while($i<=17){
    $fibo = $num1 + $num2;
    echo ", " . $fibo;
    $num1 = $num2;
    $num2 = $fibo;
    $i++;
}