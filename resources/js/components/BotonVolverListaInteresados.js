import React from 'react';
import ReactDOM from 'react-dom';

function BotonVolverListaInteresados() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-body">

                            <div class="row justify-content-center">           
                                <a href="/listaInteresados" class="btn btn-primary"> Volver </a>     
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BotonVolverListaInteresados;

if (document.getElementById('botonVolverListaInteresados')) {
    ReactDOM.render(<BotonVolverListaInteresados />, document.getElementById('botonVolverListaInteresados'));
}