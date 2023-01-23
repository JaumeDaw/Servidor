<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Usuari;
use App\Models\Post;
use App\Models\Comentari;

class ComentariSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // $usuaris = Usuari::all();
        // $usuaris->each(function($usuari) {
        //     $post = $usuari->post;
        //     Comentari::factory()->count(3)->create([
        //         'usuari_id' => $usuari->id,
        //         'post_id' => $post->id
        //     ]);
        // });
        $posts = Post::all();
        $posts->each(function($post){
            for($i = 0; $i<3; $i++){
                Comentari::factory()->count(1)->create([
                    'usuari_id' => Usuari::inRandomOrder()->first()->id,
                    'post_id' => $post->id
                ]);
            }
        });
    }
}
