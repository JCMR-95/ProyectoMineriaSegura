import React from 'react';
import ReactDOM from 'react-dom';
import logoValorice from './images/Logo-Valorice.png';
import logoInnovaWill from './images/Logo-InnovaWill.png';

function Auspiciadores() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <img src={logoValorice} alt="Logo" width="300" height="110" align="left"/>
                    <img src={logoInnovaWill} alt="Logo" width="300" height="110" align="right"/>
                </div>
            </div>
        </div>
    );
}

export default Auspiciadores;

if (document.getElementById('auspiciadores')) {
    ReactDOM.render(<Auspiciadores />, document.getElementById('auspiciadores'));
}
