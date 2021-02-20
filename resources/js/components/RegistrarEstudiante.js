import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import axios from 'axios';


class RegistrarEstudiante extends Component {

  constructor (props) {

    super(props)
    this.state = {
      nombreEstudiante: '',
      correoEstudiante: '',
      contrasenaEstudiante: ''
    }

    this.onChangeValue = this.onChangeValue.bind(this);
    this.onSubmitButton = this.onSubmitButton.bind(this);

  }

    onChangeValue(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmitButton(e) {
        e.preventDefault();

        axios.post('guardarEstudiante', {
            nombreEstudiante: this.state.nombreEstudiante,
            correoEstudiante: this.state.correoEstudiante,
            contrasenaEstudiante: this.state.contrasenaEstudiante
        })

        .then(function (response) {
            console.log(response.data);
        })

        .catch(function (error) {
            console.log(error);
        });

        
        this.setState({
            nombreEstudiante: '',
            correoEstudiante: '',
            contrasenaEstudiante: ''
        })
    }


  componentDidMount () {

  }

   
  render () {

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Ingrese Datos de Estudiante</div>
                        <div className="card-body">
                            <form onSubmit={this.onSubmitButton}>
                                <strong>Nombre:</strong>
                                <input type="text" name="nombreEstudiante" className="form-control" value={this.state.nombreEstudiante} onChange={this.onChangeValue} />
                                <strong>Correo:</strong>
                                <input type="text" name="correoEstudiante" className="form-control" value={this.state.correoEstudiante} onChange={this.onChangeValue} />
                                <strong>Contraseña:</strong>
                                <input type="text" name="contrasenaEstudiante" className="form-control" value={this.state.contrasenaEstudiante} onChange={this.onChangeValue} />
                                <button className="btn btn-primary">Enviar</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
  }
}

export default RegistrarEstudiante;

if (document.getElementById('registrarEstudiante')) {
    ReactDOM.render(<RegistrarEstudiante />, document.getElementById('registrarEstudiante'));
}