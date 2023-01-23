<nav class="navbar navbar-dark bg-dark navbar-expand-lg">
    <a class="navbar-brand" href="#">Blog</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
            <li class="nav-item active">
                <a class="nav-link" href="{{ route('inici') }}">Inici</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="{{ route('posts') }}">Listat de Posts</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="{{ route('posts.create') }}">Crear nou Post</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="{{ route('rand') }}">Crear nou Post Aleatori</a>
            </li>
        </ul>
    </div>
</nav>
        <h3 style="text-align: right; margin:0.5em 2em 0em 0em;">Data actual {{ dataActual() }}</h3>
