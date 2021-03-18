@extends('layouts.app')

@section('content')
<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        
    </head>
    <body style="background-color:#100c4c;">
        @include('mensajes-flash')
        <div class="content" style="background-color:#100c4c;">
            <form action="guardarInteresado" method="post">
                @csrf
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-md-8">
                            <div class="card">
                                <div class="card-header">Enviar consulta</div>
                                <div class="card-body">
                                    <form onSubmit={this.onSubmitButton}>
                                        <strong>Nombre:</strong>
                                        <input type="text" name="nombreInteresado" class="form-control" />
                                        <strong>Correo:</strong>
                                        <input type="text" name="correoInteresado" class="form-control" />
                                        <strong>Teléfono:</strong>
                                        <input type="text" name="telefonoInteresado" class="form-control"/>
                                        <strong>Consulta:</strong>
                                        <input type="text" name="consultaInteresado" class="form-control"/>
                                        <button class="btn btn-primary" type="submit">Enviar</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>

        <br>
        <div class="content" style="background-color:#100c4c;">
            <div id="consultas">
            </div>
        </div>
        <br>
        <div class="content" style="background-color:#100c4c;">
            <div id="auspiciadores">
            </div>
        </div>
    </body>  
</html
@endsection