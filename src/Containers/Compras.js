import React, {Component} from 'react'

import Header from '../Components/Header';


class Compras extends Component {
    constructor(props) {
        super();
        this.state = {
            comprasList:[],
            loading: true,
            producto: 1,
            cantidad: '',
            valor: ''
        }
    }

    myChangeHandler = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }

    mySubmitHandler = (event) => {
        event.preventDefault();

        const url = `http://127.0.0.1:8000/api/registracompra/${this.state.producto}/${this.state.cantidad}`;
            window.fetch(url,{
                method:'POST'
            })
            .then(res => res.json())
            .then(respuesta => {
                console.log(respuesta);
            });
        
        this.getCompras();

    }
    
    componentWillMount () {
        this.getCompras();
    }

    getCompras() {
        window.fetch('http://127.0.0.1:8000/api/comprasproducto',{
            method:'GET',
        })
        .then(response => {
            return response.json();
        })
        .then(response => {
            this.setState({ comprasList: response.data, loading:false });
        });
    }


    render() {  
        
        if ( this.state.loading ) {
            return(    
                <h1>Cargando...</h1>                
            )  
        } else {
            return(
                <form onSubmit={this.mySubmitHandler} >
                    <table className="table table-striped">
                        <tr>
                            <th>nombre</th>
                            <th>cantidad</th>
                        </tr> 
                        <tr>
                            <th>
                                <select name="producto" className="form-control" value={this.state.producto} onChange={this.myChangeHandler}>
                                    <option value="1">Vetactin</option>                                   
                                    <option value="2">Viusid</option>                                   
                                    <option value="3">Babemic</option>                                   
                                    <option value="4">Colivet</option>                                   
                                    <option value="5">Veproflox</option>                                   
                                    <option value="6">Correas perros</option>                                   
                                    <option value="7">kit de limpieza</option>                                   
                                    <option value="8">Sulphur</option>                        
                                    <option value="9">Caja de transporte</option>
                                    <option value="10">Baño seco</option>
                                </select>
                            </th>
                            <th><input name="cantidad" className="form-control" onChange={this.myChangeHandler}/></th>
                        </tr>  
                        <tr>
                            <th><input type="submit" value="Crear" className="btn btn-primary" /></th>
                        </tr>   
                        <tr>
                            <th>nombre</th>
                            <th>cantidad</th>
                            <th>valor</th>
                        </tr>
                                    
                            {
                            this.state.comprasList.map(function(item, i){
                            return <Compra key={i} data = {item} />
                            })
                        }
                        
                    </table>
                </form>
            )  
        }  
    }
}

const Compra = (data) => {
    return(
        <tr>
             <td>{data.data.nombre}</td>
             <td>{data.data.cantidad}</td>
             <td>{data.data.valor}</td>
        </tr>
    );
}

export default Compras;