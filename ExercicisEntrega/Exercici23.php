<?php

$num1 = 1;
$num2 = 1;
$fibo;

echo $num1 . ", " . $num2;

for($i = 0; $i <= 17; $i++){
    $fibo = $num1 + $num2;
    echo ", " . $fibo;
    $num1 = $num2;
    $num2 = $fibo;
}