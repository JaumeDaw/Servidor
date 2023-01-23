<?php

use Carbon\Carbon;

function dataActual(){
    $data = Carbon::now();
    $data = $data->format('d/m/Y');
    echo $data;
}
?>
