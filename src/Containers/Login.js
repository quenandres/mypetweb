import React, {Component} from 'react'

import '../assets/styles/login.css';

import logo from '../assets/images/gato_negro.png';


class Login extends Component {
   
    render() {
        return(
            <div className='fondo'>                
                <table className="table table-striped tablogin">
                    <tr>
                        <td>
                            <table>
                                <tr>
                                    <td>
                                        <img src={logo} className='logo' alt="logo" />
                                    </td>
                                    <td>
                                        <div className='titulo'>Bienvenido a mypets</div>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <th>Usuario</th>
                    </tr>
                    <tr>
                        <td>
                            <input className="form-control" type="text" />
                        </td>
                    </tr>
                    <tr>
                        <th>Password</th>
                    </tr>
                    <tr>
                        <td>
                            <input className="form-control" type="password" />
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <input type="button" className="btn btn-primary" value="Ingresar" />
                        </td>
                    </tr>
                </table>
            </div>
        );
    }
}

export default Login;