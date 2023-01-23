<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Usuari;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Usuari>
 */
class UsuariFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    protected $model = Usuari::class;
    public function definition()
    {
        return [
            'nom' => $this->faker->name,
            'login' => $this->faker->unique()->word,
            'password' => $this->faker->word,
            'dataNaix' => $this->faker->numberBetween(1980,2022),
        ];
    }
}
