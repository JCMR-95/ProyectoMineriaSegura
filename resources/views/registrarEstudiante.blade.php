@extends('layouts.app')

@section('content')
<body style="background-color:#100c4c;">
    @include('mensajes-flash')
    <div class="content" style="background-color:#100c4c;">
    @include('mensajes-flash')
        <div class="content" style="background-color:#100c4c;">
            <form action="guardarEstudiante" method="post">
                @csrf
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-md-8">
                            <div class="card">
                                <div class="card-header">Ingrese Datos de Estudiante</div>
                                <div class="card-body">
                                    <form onSubmit={this.onSubmitButton}>
                                        <strong>Nombre:</strong>
                                        <input type="text" name="nombreEstudiante" class="form-control" />
                                        <strong>Correo:</strong>
                                        <input type="text" name="correoEstudiante" class="form-control" />
                                        <strong>Teléfono:</strong>
                                        <input type="text" name="contrasenaEstudiante" class="form-control"/>
                                        <button class="btn btn-primary" type="submit">Enviar</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
    <br>
    <div class="content">
        <div id="auspiciadores">
        </div>
    </div>
</body>

@endsection
