import React from 'react';
import ReactDOM from 'react-dom';

function BotonVerInteresadosAtendidos() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-body">

                            <div class="row justify-content-center">           
                                <a href="/listaInteresadosAtendidos" class="btn btn-primary"> Ver Atendidos </a>     
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BotonVerInteresadosAtendidos;

if (document.getElementById('botonVerInteresadosAtendidos')) {
    ReactDOM.render(<BotonVerInteresadosAtendidos />, document.getElementById('botonVerInteresadosAtendidos'));
}