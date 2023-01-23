@extends('plantilla')
@section('titol', 'Llistat Posts')

@section('contingut')
    <h1>Llistat de Posts</h1>
    <table style="margin: 2em 5em">
        @forelse ($posts as $post)
            <tr style="height:4rem">
                <th>{{ $post->titol }} -- ({{ $post->usuari->nom }})</th>
                <td><a href="{{ route('posts.show', $post) }}"><button type="button" class="btn btn-warning">Vore</button></a></td>
                <td><form style="display:inline" action="{{ route('posts.destroy', $post) }}" method="POST">
                    @method('DELETE')
                    @csrf
                    <button class="btn btn-danger">Borrar</button>
                </form></td>
               <td><a href="{{ route('posts.edit',$post) }}"><button class="btn btn-success">Editar</button></a></td>
            </tr>
        @empty
            <li>No s'han trobat posts</li>
        @endforelse
        <tr>
            <td>{{ $posts->links() }}</td>
        </tr>
    </table><br>
@endsection
