<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Usuari;
use App\Models\Comentari;

class Post extends Model
{
    use HasFactory;
    protected $table = 'posts';

    public function usuari(){
        return $this->belongsTo('App\Models\Usuari');
    }
    public function comentaris(){
        return $this->hasMany(Comentari::class);
    }
}
