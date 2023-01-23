<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Post;
use App\Models\Comentari;

class Usuari extends Model
{
    use HasFactory;
    protected $table = 'usuari';

    public function posts(){
        return $this->hasMany('App\Models\Post');
    }
    public function comentaris(){
        return $thsi->hasMany(Comentari::class);
    }
}
