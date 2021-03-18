@extends('layouts.app')

@section('content')
<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        
    </head>
    <body style="background-color:#100c4c;">
        @include('mensajes-flash')
        <div class="content" style="background-color:#100c4c;">
            <form action="primerAdministrador" method="post">
                @csrf
                <button type="submit">Enviar Datos</button>
            </form>
        </div>
        <br>
        <div class="content" style="background-color:##100c4c;">
            <div id="auspiciadores">
            </div>
        </div>
    </body>  
</html
@endsection