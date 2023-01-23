<?php
$i = 100;
while($i>=0){
    if($i!=0){
        echo $i . ", ";
    }else{
        echo $i;
    }
    
    $i-=2;
}