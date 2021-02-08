@extends('layouts.app')

@section('content')
<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <link rel="stylesheet" href="{{asset('/css/general.css')}}">
    </head>
    <body>
        <div class="content" style="background-color:#351E75;">
            <div id="presentacion">
            </div>
        </div>
        <br>
        <div class="content" style="background-color:#351E75;">
            <div id="listaCursos">
            </div>
        </div>
        <br>
        <div class="content" style="background-color:#351E75;">
            <div id="consultas">
            </div>
        </div>
        <br>
        <div class="content" style="background-color:#351E75;">
            <div id="auspiciadores">
            </div>
        </div>
    </body>

    <script src="{{ asset('js/app.js') }}" defer></script>
   
</html
@endsection