import React from 'react';
import ReactDOM from 'react-dom';

function Auspiciadores() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card2">
                        <div className="card-header">Asdasdasd</div>

                        <div className="card-body">I'm an example component!</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Auspiciadores;

if (document.getElementById('auspiciadores')) {
    ReactDOM.render(<Auspiciadores />, document.getElementById('auspiciadores'));
}
