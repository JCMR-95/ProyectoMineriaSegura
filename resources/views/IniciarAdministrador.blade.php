@extends('layouts.app')

@section('content')
<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        
    </head>
    <body>
        <div class="content" style="background-color:#351E75;">
            <form action="primerAdministrador" method="post">
                @csrf
                <button type="submit">Enviar Datos</button>
            </form>
        </div>
        <br>
        <div class="content" style="background-color:#351E75;">
            <div id="auspiciadores">
            </div>
        </div>
    </body>  
</html
@endsection