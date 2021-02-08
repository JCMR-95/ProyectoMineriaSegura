import React from 'react';
import ReactDOM from 'react-dom';
import Telefono from './icons/Telefono-Icono.png';
import Correo from './icons/Correo-Icono.png';
import Ubicacion from './icons/Ubicacion-Icono.png';
import Horario from './icons/Horario-Icono.png';

function Consultas() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Consultas:</div>

                        <div className="card-body">
                            <img src={Telefono} alt="Logo" width="30" height="30"/> +569123456789
                        </div>
                        <div className="card-body">
                            <img src={Correo} alt="Logo" width="30" height="30"/> correo@correo.cl
                        </div>
                        <div className="card-body">
                            <img src={Ubicacion} alt="Logo" width="30" height="30"/> Av. Juan Perez 1234
                        </div>
                        <div className="card-body">
                            <img src={Horario} alt="Logo" width="30" height="30"/>  Lunes a Viernes 8:30 - 16:00
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Consultas;

if (document.getElementById('consultas')) {
    ReactDOM.render(<Consultas />, document.getElementById('consultas'));
}
