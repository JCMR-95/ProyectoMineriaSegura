import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import {Table, Column, Cell} from 'fixed-data-table';
import axios from 'axios';


export default class ListaInteresados extends Component {

    constructor(props){
        super(props);
        this.state={
            interesados:[]
        }
      }

      componentDidMount(){
        this._isMounted = true;
        
        axios.get('http://proyectomineriasegura.test/api/listaInteresados').then(response=>{
          this.setState({interesados:response.data})
        }).catch(error=>{
          alert("Error "+error)
        })
      }

      componentWillUnmount() {
        this._isMounted = false;
      }
    
      render() {
        return (
          <div className="container">
            <br/>
            <h3>Listado de Interesados</h3>
            <hr/>

            <table className="table table-bordered order-table ">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Nombre</th>
                  <th>Correo</th>
                  <th>Teléfono</th>
                  <th>Consulta</th>
                  <th>Eliminar</th>
                </tr>
              </thead>
              <tbody id="bodytable">
                  {this.renderList()}
              </tbody>
            </table>

          </div>
        );
    }

    renderList(){

      return this.state.interesados.map((data)=>{

        return(
          <tr>
            <td>{data.id}</td>
            <td>{data.nombre}</td>
            <td>{data.correo}</td>
            <td>{data.telefono}</td>
            <td>
              <a href={"/detalles/"+ data.id} className="btn btn-secondary">
                  Detalles
              </a>
            </td>
            <td>
              <a href={"/eliminar/"+ data.id} className="btn btn-danger">
                  Eliminar
              </a>
            </td>
          </tr>
        )

      })

    }
}


if (document.getElementById('listaInteresados')) {
    ReactDOM.render(<ListaInteresados />, document.getElementById('listaInteresados'));
}