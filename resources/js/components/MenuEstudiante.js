import React from 'react';
import ReactDOM from 'react-dom';

function MenuEstudiante() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div class="card-header"> Menú Principal </div>

                        <div className="card-body">
                            <div class="row justify-content-center">
                                <button type="submit" class="btn btn-primary">Clases</button>
                            </div>
                            <div class="row justify-content-center">
                                <button type="submit" class="btn btn-primary">Notas</button>
                            </div>
                            <div class="row justify-content-center">
                                <button type="submit" class="btn btn-primary">Situación</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MenuEstudiante;

if (document.getElementById('menuEstudiante')) {
    ReactDOM.render(<MenuEstudiante />, document.getElementById('menuEstudiante'));
}
