<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Usuari;
use App\Models\Post;

class Comentari extends Model
{
    use HasFactory;
    protected $table = 'comentaris';

    public function usuari(){
        return $this->belongsTo(Usuari::class);
    }
    public function posts(){
        return $this->belongsTo(Post::class);
    }
}
