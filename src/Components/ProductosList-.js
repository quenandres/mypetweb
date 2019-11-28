import React,{ Component } from 'react'

import '../assets/styles/producto.css';


//import { babemic } from '../assets/images/babemic.jpg';

import vetactin from '../assets/images/Productos/vetactin.jpg';
import viusid from '../assets/images/Productos/viusid.jpg';
import babemic from '../assets/images/Productos/babemic.jpg';
import colivet from '../assets/images/Productos/colivet.png';
import veproflox from '../assets/images/Productos/veproflox.jpg';
import correas from '../assets/images/Productos/correas.jpg';
import kitlimpieza from '../assets/images/Productos/kitlimpieza.jpg';
import sulphur from '../assets/images/Productos/sulphur.jpg';
import caja from '../assets/images/Productos/caja.jpg';
import banoseco from '../assets/images/Productos/banoseco.jpg';

class ProductoList extends Component {
    
    constructor(props) {
        super();
        this.state = {
            productos:[],
            producto: '',
            nombre: '',
            precio: '',
            descripcion: ''
        }
    }

    myChangeHandler = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }

    mySubmitHandler = (event) => {
        event.preventDefault();

        const url = `http://127.0.0.1:8000/api/buscaproducto/${this.state.producto}`;
            window.fetch(url,{
                method:'POST'
            })
            .then(res => res.json())
            .then(respuesta => {
                this.setState({productos: respuesta.data});
            });
    }

    render() {
        return(
            <div>
                <form onSubmit={this.mySubmitHandler} >
                <table className="table table-striped" width="50%">
                    <tr>
                        <td>Buscar Producto</td>
                        <td>
                            <input type="text" name="producto" className="form-control" placeholder="Producto..."  onChange={this.myChangeHandler}/>
                        </td>
                        <td>
                            <input type="submit" className="btn btn-primary" value="Buscar" />
                        </td>
                    </tr>
                </table>
                <table className="table table-striped">
                    {
                        this.state.productos.map(function(item, i){
                            return (
                                <tr>
                                    <td>{item.nombre}</td>
                                    <td>$ {item.precio}</td>
                                    <td>{item.descripcion}</td>
                                </tr>
                            );
                        })
                    }
                </table>
                </form>

                <div className="containerProducto">
                    <div className="logo">
                        <div className="nombreProducto">Vetactin</div>
                        <img src={vetactin} alt="logo" className="logoProducto"/>             
                    </div>
                    <div className="containerDescripcion">
                        <div className="precioProducto">$13.000</div>
                        <div className="descripcionProducto">Estimulante de apetito</div>
                    </div>
                </div>
                <div className="containerProducto">
                    <div className="logo">
                        <div className="nombreProducto">Viusid</div>
                        <img src={viusid} alt="logo" className="logoProducto"/>             
                    </div>
                    <div className="containerDescripcion">
                        <div className="precioProducto">$15.000</div>
                        <div className="descripcionProducto">Complemento alimenticio</div>
                    </div>
                </div>
                <div className="containerProducto">
                    <div className="logo">
                        <div className="nombreProducto">Babemic</div>
                        <img src={babemic} alt="logo" className="logoProducto"/>             
                    </div>
                    <div className="containerDescripcion">
                        <div className="precioProducto">$18.500</div>
                        <div className="descripcionProducto">Quimioterápico para el tratamiento de las piroplasmosis, babesiosis y tripanosomas</div>
                    </div>
                </div>
                <div className="containerProducto">
                    <div className="logo">
                        <div className="nombreProducto">Colivet</div>
                        <img src={colivet} alt="logo" className="logoProducto"/>             
                    </div>
                    <div className="containerDescripcion">
                        <div className="precioProducto">$19.000</div>
                        <div className="descripcionProducto">Analgésico y antipirético</div>
                    </div>
                </div>



                <div className="containerProducto">
                    <div className="logo">
                        <div className="nombreProducto">Veproflox</div>
                        <img src={veproflox} alt="logo" className="logoProducto"/>             
                    </div>
                    <div className="containerDescripcion">
                        <div className="precioProducto">$21.000</div>
                        <div className="descripcionProducto">tratamiento de infecciones</div>
                    </div>
                </div>
                <div className="containerProducto">
                    <div className="logo">
                        <div className="nombreProducto">Correas perros</div>
                        <img src={correas} alt="logo" className="logoProducto"/>             
                    </div>
                    <div className="containerDescripcion">
                        <div className="precioProducto">$17.000</div>
                        <div className="descripcionProducto">Correas para perros pequeños</div>
                    </div>
                </div>
                <div className="containerProducto">
                    <div className="logo">
                        <div className="nombreProducto">kit de limpieza</div>
                        <img src={kitlimpieza} alt="logo" className="logoProducto"/>             
                    </div>
                    <div className="containerDescripcion">
                        <div className="precioProducto">$27.000</div>
                        <div className="descripcionProducto">Kit de limpieza para mascotas</div>
                    </div>
                </div>
                <div className="containerProducto">
                    <div className="logo">
                        <div className="nombreProducto">Sulphur</div>
                        <img src={sulphur} alt="logo" className="logoProducto"/>             
                    </div>
                    <div className="containerDescripcion">
                        <div className="precioProducto">$21.000</div>
                        <div className="descripcionProducto">Producto de limpieza</div>
                    </div>
                </div>


                <div className="containerProducto">
                    <div className="logo">
                        <div className="nombreProducto">Caja de transporte</div>
                        <img src={caja} alt="logo" className="logoProducto"/>             
                    </div>
                    <div className="containerDescripcion">
                        <div className="precioProducto">$58.000</div>
                        <div className="descripcionProducto">Caja de transporte</div>
                    </div>
                </div>
                <div className="containerProducto">
                    <div className="logo">
                        <div className="nombreProducto">Baño seco</div>
                        <img src={banoseco} alt="logo" className="logoProducto"/>             
                    </div>
                    <div className="containerDescripcion">
                        <div className="precioProducto">$13.000</div>
                        <div className="descripcionProducto">Baño seco desodorizante</div>
                    </div>
                </div>
            </div>
            
        );
    }
    
}

export default ProductoList;