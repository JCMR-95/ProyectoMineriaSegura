import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import axios from 'axios';


class Contacto extends Component {

  constructor (props) {

    super(props)
    this.state = {
      nombreInteresado: '',
      correoInteresado: '',
      telefonoInteresado: '',
      consultaInteresado: ''
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

        axios.post('/guardarInteresado', {
            nombreInteresado: this.state.nombreInteresado,
            correoInteresado: this.state.correoInteresado,
            telefonoInteresado: this.state.telefonoInteresado,
            consultaInteresado: this.state.consultaInteresado
        })

        .then(function (response) {
            console.log(response.data);
        })

        .catch(function (error) {
            console.log(error);
        });

        
        this.setState({
            nombreInteresado: '',
            correoInteresado: '',
            telefonoInteresado: '',
            consultaInteresado: ''
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
                        <div className="card-header">Enviar consulta</div>
                        <div className="card-body">
                            <form onSubmit={this.onSubmitButton}>
                                <strong>Nombre:</strong>
                                <input type="text" name="nombreInteresado" className="form-control" value={this.state.nombreInteresado} onChange={this.onChangeValue} />
                                <strong>Correo:</strong>
                                <input type="text" name="correoInteresado" className="form-control" value={this.state.correoInteresado} onChange={this.onChangeValue} />
                                <strong>Teléfono:</strong>
                                <input type="text" name="telefonoInteresado" className="form-control" value={this.state.telefonoInteresado} onChange={this.onChangeValue} />
                                <strong>Consulta:</strong>
                                <textarea className="form-control" name="consultaInteresado" value={this.state.consultaInteresado} onChange={this.onChangeValue}></textarea>
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

export default Contacto;

if (document.getElementById('contacto')) {
    ReactDOM.render(<Contacto />, document.getElementById('contacto'));
}