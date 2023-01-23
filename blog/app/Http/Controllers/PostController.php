<?php

namespace App\Http\Controllers;

use App\Http\Requests\PostRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Models\Post;
use App\Models\Usuari;
use App\Models\Comentari;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $posts = Post::orderBy('titol','asc')->paginate(5);
        return view('posts.index',compact('posts'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        // return "Pàgina de creació de posts";
        // return redirect() -> route('inici');
        return view('posts.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(PostRequest $request)
    {
        $post = new Post();
        $post->titol = $request->input('titol');
        $post->contingut = $request->input('contingut');
        $post->usuari_id = Usuari::inRandomOrder()->first()->id;
        $post->save();
        return redirect()->route('posts');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $post = Post::findOrFail($id);
        return view('posts.show',compact('post'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        // return "Pàgina d'edició del post $id";
        // return redirect() -> route('inici');
        $post = Post::findOrFail($id);
        // return view('posts.edit');
        return view('posts.edit',compact('post'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Post::findOrFail($id)->delete();
        Comentari::where('post_id',$id)->delete();
        return redirect()->route('posts');
    }

    public function postRandom(){
        $post = new Post();
        $post->titol = 'Titol ' . rand();
        $post->contingut = 'Contingut ' . rand();
        $post->usuari_id = Usuari::inRandomOrder()->first()->id;
        $post->save();
        return redirect()->route('posts');
    }

    public function editarPost($id,PostRequest $request){
        $postAModificar = Post::findOrFail($id);
        $postAModificar->titol = $request->input('titol');
        $postAModificar->contingut = $request->input('contingut');
        $postAModificar->usuari_id = 1;
        $postAModificar->save();
        return redirect()->route('posts');

    }
}
