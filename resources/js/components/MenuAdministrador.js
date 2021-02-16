import React from 'react';
import ReactDOM from 'react-dom';

function MenuAdministrador() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div class="card-header"> Menú Principal </div>

                        <div className="card-body">

                            <div class="row justify-content-center">           
                                <a href="/listaInteresados" class="btn btn-primary"> Ver Interesados </a>     
                            </div>
                            <div class="row justify-content-center">
                                <a href="/Volver" class="btn btn-primary"> Agregar Estudiantes </a> 
                            </div>
                            <div class="row justify-content-center">
                                <a href="/Volver" class="btn btn-primary"> Ver Estudiantes </a> 
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MenuAdministrador;

if (document.getElementById('menuAdministrador')) {
    ReactDOM.render(<MenuAdministrador />, document.getElementById('menuAdministrador'));
}
