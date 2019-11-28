import React, {Component} from 'react'

import Header from '../Components/Header';
import ProductoList from '../Components/ProductosList-';


class Productos extends Component {
    constructor(props) {
        super();
        this.state = {
            productosList:[],
            loading: true
        }
    }
    
    componentWillMount () {
        window.fetch('http://127.0.0.1:8000/api/productos')
        .then(response => {
            return response.json();
        })
        .then(response => {
            this.setState({ productosList: response.data, loading:false });
        });
    }


    render() {
        
        if ( this.state.loading ) {
            return(                   
                <div>
                    <h1>Cargando...</h1>                    
                </div>
            )  
        } else {
            return(
                <>
                <table className="table table-striped" width="50%">
                    <tr>
                        <td>Buscar Producto</td>
                        <td>
                            <input type="text" className="form-control" placeholder="Producto..."/>
                        </td>
                        <td>
                            <input type="button" className="btn btn-primary" value="Buscar" />
                        </td>
                    </tr>
                </table>
                   <ProductoList />                   
                </>
            );
        }  
    }
}

export default Productos;