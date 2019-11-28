import React, {Component} from 'react'

import Header from '../Components/Header';

import '../assets/styles/perfil.css';

import imagen from '../assets/images/perro1.jpg';

class Perfil extends Component {
    constructor(props) {
        super();
        this.state = {
            usuario:[],
            loading: true
        }
    }

    componentWillMount () {
        window.fetch('http://127.0.0.1:8000/api/usuarios/1')
        .then(response => {
            return response.json();
        })
        .then(response => {
            this.setState({ usuario: response.data[0], loading:false });
            console.log(this.state.usuario);
        });
    }

    render() {
        return(
            <div>
                <table className="table table-striped tabperfil">
                    <tr>
                        <th>Nombres</th>
                        <td>{this.state.usuario.nombre}</td>
                        <th>Apellidos</th>
                        <td>{this.state.usuario.apellido}</td>
                    </tr>
                    <tr>
                        <th>Tipo cliente</th>
                        <td>{this.state.usuario.tipo}</td>
                        <th>Correo</th>
                        <td>{this.state.usuario.email}</td>
                    </tr>
                    <tr>
                        <th>CC</th>
                        <td>{this.state.usuario.cc}</td>
                        <td colspan="2">
                            <img className="perfil" src={imagen} />
                        </td>
                    </tr>
                </table>
            </div>
        );
    }
}

export default Perfil;