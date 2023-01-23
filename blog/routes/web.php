<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PostController;
use App\Models\Post;
use App\Models\Usuari;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('inici');
})->name('inici');

Route::resource('posts', PostController::class);
Route::get('posts', [PostController::class,'index'])->name('posts');
Route::get('posts/{id}', [PostController::class,'show'])->name('posts_fitxa');
Route::get('postRandom', [PostController::class,'postRandom'])->name('rand');
Route::get('posts/editarPost/{id}', [PostController::class,'editarPost'])->name('editarPost');
Route::get('posts/{id}/editar',[PostController::class,'editar'])->name('editar');

Route::get('relacioProva', function(){
    $usuari = Usuari::findOrFail(1);
    $post = new Post();
    $post->titol = "Post de prova " . rand();
    $post->contingut = "Contingut del post " . rand();
    $post->usuari()->associate($usuari);
    $post->save();

    return redirect()->route('posts');

});
