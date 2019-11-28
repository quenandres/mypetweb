import React,{ Component } from 'react'

import '../assets/styles/tienda.css';


import clinica_veterinaria from '../assets/images/Veterinarias/clinica_veterinaria.jpeg';
import hospital_animal from '../assets/images/Veterinarias/hospital_animal.jpeg';
import mevet from '../assets/images/Veterinarias/mevet.jpeg';
import tienda_patitas from '../assets/images/Veterinarias/tienda_patitas.png';
import Veterinaria_cats from '../assets/images/Veterinarias/Veterinaria_cats.jpeg';

class TiendaList extends Component {
    
    constructor(props) {
        super();
        this.state = {
            tiendas:[]
        }
    }

    myChangeHandler = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }


    mySubmitHandler = (event) => {
        event.preventDefault();

        const url = `http://127.0.0.1:8000/api/buscatienda/${this.state.tienda}`;
            window.fetch(url,{
                method:'POST'
            })
            .then(res => res.json())
            .then(respuesta => {
                this.setState({tiendas: respuesta.data});
            });
   }


    render() {
        return(
            <div>
                <form onSubmit={this.mySubmitHandler} >
                    <table className="table table-striped" width="50%">
                        <tr>
                            <td>Buscar Tienda</td>
                            <td>
                                <input type="text" name="tienda" className="form-control" placeholder="Tienda..."  onChange={this.myChangeHandler}/>
                            </td>
                            <td>
                                <input type="submit" className="btn btn-primary" value="Buscar" />
                            </td>
                        </tr>
                    </table>
                </form>
                <table className="table table-striped">
                        <tr>
                            <th>Nombre</th>
                            <th>Direccion</th>
                        </tr>
                    {
                        this.state.tiendas.map(function(item, i){
                            return (
                                <tr>
                                    <td>{item.nombre}</td>
                                    <td>{item.direccion}</td>
                                </tr>
                            );
                        })
                    }
                </table>
                <div className="containerTienda">                    
                    <div className="nombreVeterinaria">Clinica veterinaria</div>
                    <img src={clinica_veterinaria} alt="logo" className="logoTienda"/>                    
                </div>
                <div className="containerTienda">                    
                    <div className="nombreVeterinaria">Hospital animal</div>
                    <img src={hospital_animal} alt="logo" className="logoTienda"/>                    
                </div>
                <div className="containerTienda">                    
                    <div className="nombreVeterinaria">Mevet</div>
                    <img src={mevet} alt="logo" className="logoTienda"/>                    
                </div>
                <div className="containerTienda">                    
                    <div className="nombreVeterinaria">Tienda patitas</div>
                    <img src={tienda_patitas} alt="logo" className="logoTienda"/>                    
                </div>
                <div className="containerTienda">                    
                    <div className="nombreVeterinaria">Veterinaria Cats</div>
                    <img src={Veterinaria_cats} alt="logo" className="logoTienda"/>                    
                </div>
            </div>
            
        );
    }
    
}

export default TiendaList;