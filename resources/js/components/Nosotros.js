import React from 'react';
import ReactDOM from 'react-dom';

function Nosotros() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Nosotros</div>
                        <div className="card-body">I'm an example component!</div>
                        <div className="card-header">Nosotros</div>
                        <div className="card-body">I'm an example component!</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Nosotros;

if (document.getElementById('nosotros')) {
    ReactDOM.render(<Nosotros />, document.getElementById('nosotros'));
}
