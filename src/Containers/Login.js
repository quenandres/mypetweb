import React, {Component} from 'react'

import '../assets/styles/login.css';

import logo from '../assets/images/gato_negro.png';


class Login extends Component {
   
    constructor() {
        super();
        this.state={ user:'', pass:'' }

        this.handleSubmit = this.handleSubmit.bind(this);

    }

        handleChange = event =>{
            this.setState({ [event.target.name]:event.target.value })
        }
        
        handleSubmit = event => {
            event.preventDefault();
            
            const url = `http://127.0.0.1:8000/api/ingreso/${this.state.user}/${this.state.pass}`

            const data = { user:this.state.user, pass:this.state.pass }
                fetch(url)
                .then(res => res.json())
                .catch(error => console.error('Error:', error))
                .then(response => {
                    if(response.data){
                        window.location="/";
                    } else {
                        alert("Error datos incorrectos");
                    }
                }); 


                
                /* 
                fetch(url, { method: 'GET', // or 'PUT'
                body: JSON.stringify(data), // data can be `string` or {object}!
                headers:{ 'Content-Type': 'application/json' } })
                .then(res => res.json())
                .catch(error => console.error('Error:', error))
                .then(response => console.log('Success:', response)); 
                */
        }



    render() {
        return(
            <div className='fondo'>    
                <form id="formulario" onSubmit={this.handleSubmit}>         
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
                            <input className="form-control" name="user" type="text" onChange={this.handleChange} />
                        </td>
                    </tr>
                    <tr>
                        <th>Password</th>
                    </tr>
                    <tr>
                        <td>
                            <input className="form-control" name="pass" type="password" onChange={this.handleChange}/>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <input type="submit" onClick={this.handleSubmit} className="btn btn-primary" value="Ingresar" />
                        </td>
                    </tr>
                </table>
                </form>
            </div>
        );
    }
}

export default Login;