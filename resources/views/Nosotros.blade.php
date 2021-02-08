@extends('layouts.app')

@section('content')
<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        
    </head>
    <body>
        <div class="content">
            <div id="nosotros">
            </div>
        </div>
        <br>
        <div class="content">
            <div id="consultas">
            </div>
        </div>
        <div class="content">
            <div id="auspiciadores">
            </div>
        </div>
    </body>

    <script src="{{ asset('js/app.js') }}" defer></script>
   
</html
@endsection