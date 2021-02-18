import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import axios from 'axios';


class DetallesInteresado extends Component {

  constructor (props) {

    super(props)
    this.state = {
      consulta: ''
    }

  }

  componentDidMount () {

  }

   
  render () {

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-body">
                            <strong>Consulta:</strong>
                            <input type="text" name="consulta" disabled="disabled" className="form-control" value={consulta} />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
  }
}

export default DetallesInteresado;

if (document.getElementById('detallesInteresado')) {
    ReactDOM.render(<DetallesInteresado />, document.getElementById('detallesInteresado'));
}