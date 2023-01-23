@extends('plantilla')
@section('titol', 'Creació de Posts')

@section('contingut')
    <h1 style="text-decoration: underline; text-align:center">Crear Post</h1>
    @if ($errors->any())
    <ul>
        @foreach ($errors->all() as $error)
            <li style="text-align: center; font-size:14px;">{{ $error }}</li>
        @endforeach
    </ul>
    @endif
    <form action="{{ route('posts.store') }}" method="POST" style="width: 80%; margin:0 10%;">
        @csrf
        <div class="form-group">
            <label for="titol">Titol:</label>
            <input type="text" class="form-control" name="titol" id="titol">
        </div>
        <div class="form-group">
            <label class="form-label" for="contingut">Contingut:</label>
            <textarea class="form-control" name="contingut" id="contingut" cols="30" rows="10"></textarea>
        </div>
        <br>
        {{-- <div class="form-group">
            <label for="usuari_id">Id autor:</label>
            <input type="number" class="form-control" name="usuari_id" id="usuari_id" min="1">
        </div>
        <br> --}}
        <input type="submit" name="enviar" value="Enviar" class="btn btn-dark btn-block">
    </form>
@endsection
