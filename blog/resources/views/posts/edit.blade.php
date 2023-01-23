@extends('plantilla')
@section('titol', "Edicio del Post $post->id ")

@section('contingut')
    <h1 style="text-decoration: underline;">Editar Post</h1>
    @if ($errors->any())
        <ul>
            @foreach ($errors->all() as $error)
                <li style="text-align: center; font-size:14px;">{{ $error }}</li>
            @endforeach
        </ul>
    @endif
    <form action="{{ route('editarPost', $post->id) }}" method="GET" style="width: 80%; margin:0 10%;">
        @csrf
        <div class="form-group">
            <label for="titol">Titol:</label>
            <input type="text" class="form-control" name="titol" id="titol" value="{{ $post->titol }}">
            @if ($errors->has('titol'))
                <div class="text-danger">
                    {{ $errors->first('titol') }}
                </div>
            @endif
        </div>
        <div class="form-group">
            <label class="form-label" for="contingut">Contingut:</label>
            <textarea class="form-control" name="contingut" id="contingut" cols="30" rows="10"
                placeholder="{{ $post->contingut }}">{{ old('contingut') }}</textarea>
        </div>
        <br>
        <input type="submit" name="enviar" value="Enviar" class="btn btn-dark btn-block">
    </form>
@endsection
