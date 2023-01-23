<?php
echo "5 numeros de l'u al 50: "; 
for($i = 0; $i < 5; $i++){
    echo mt_rand(1,50) . " ";
}
echo "<br>2 números de l'u al 9: ";
for($a = 0; $a < 2; $a++){
    echo mt_rand(1,9) . " ";
}
?>