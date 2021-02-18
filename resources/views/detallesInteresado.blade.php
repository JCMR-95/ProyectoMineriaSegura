@extends('layouts.app')

@section('content')
<body style="background-color:#100c4c;">
    <div class="content" style="background-color:#100c4c;">
        <div id="detallesInteresado">
        </div>
        <div id="botonVolverListaInteresados">
        </div>
    </div>
    <br>
    <div class="content">
        <div id="auspiciadores">
        </div>
    </div>
</body>

<script> let consulta= '{{ $consulta }}' </script>

@endsection