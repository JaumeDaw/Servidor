<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Post;
use App\Models\Usuari;
use App\Models\Comentari;

class PostsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $usuaris = Usuari::all();
        $usuaris->each(function($usuari) {
            Post::factory()->count(3)->create([
                'usuari_id' => $usuari->id
            ]);
        });
    }
}
