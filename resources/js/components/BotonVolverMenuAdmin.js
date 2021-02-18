import React from 'react';
import ReactDOM from 'react-dom';

function BotonVolverMenuAdmin() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-body">

                            <div class="row justify-content-center">           
                                <a href="/menuAdministrador" class="btn btn-primary"> Volver </a>     
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BotonVolverMenuAdmin;

if (document.getElementById('botonVolverMenuAdmin')) {
    ReactDOM.render(<BotonVolverMenuAdmin />, document.getElementById('botonVolverMenuAdmin'));
}