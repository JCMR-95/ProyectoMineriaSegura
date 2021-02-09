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
                                <button type="submit" class="btn btn-primary">Agregar Administrador</button>
                            </div>
                            <div class="row justify-content-center">
                                <button type="submit" class="btn btn-primary">Ver Estudiantes</button>
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
