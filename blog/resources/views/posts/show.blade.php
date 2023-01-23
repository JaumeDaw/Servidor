@extends('plantilla')
@section('titol', "Post {$post->id}")

@section('contingut')
    <h1 style="text-decoration: underline; text-align:center;">{{ $post->titol }}</h1>
    <p style="text-align: right; margin:0.5em 2em 2em 0em;"><small>Data de creació:
            {{ $post->created_at->format('d/m/Y h:i:s') }}</small></p>
    <div style="margin:0 10%;background-color:azure;padding:1.5rem;border-radius:2rem;">
        <p style="text-decoration:underline;font-size:1.5em;border-radius:2rem 2rem 0 2rem;
             border:2px solid rgb(199, 199, 199); display:inline-block;background-color:lightgray;padding:0.3rem">
            {{ $post->usuari->nom }}</p><br>
        {{ $post->contingut }}
    </div>
    <br>
    <div style="text-align: right; margin:0 2rem;">
        <form style="display:inline-block"action="{{ route('posts.destroy', $post) }}" method="POST">
            @method('DELETE')
            @csrf
            <button class="btn btn-danger">Borrar</button>
        </form>
        <form style="display:inline-block" action="{{ route('editar', $post->id) }}">
            <button class="btn btn-primary">Editar</button>
        </form>
    </div>
    <div>
        <ul style="list-style-type:none">
            @forelse ($post->comentaris as $comentari)
                <li style="margin:2em 20%; background-color:azure; padding:1.5rem;border-radius:2rem">
                    <p style="text-decoration:underline;font-size:1.5em;border-radius:2rem 2rem 0 2rem;
                     border:2px solid rgb(199, 199, 199); display:inline-block;background-color:lightgray;padding:0.3rem">
                        {{ $comentari->usuari->nom }}</p><br>
                    {{ $comentari->contingut }}
                </li>
            @empty
                <li>No hi ha comentaris</li>
            @endforelse
        </ul>
    </div>

@endsection
