import React, {Component} from 'react'

import Header from '../Components/Header';
import ProductoList from '../Components/ProductosList';

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
                <h1>Cargando...</h1>                
            )  
        } else {
            return(
                this.state.productosList.map(function(item, i){
                    return (<div className="contenedorProductos">
                        <ProductoList key={i} data = {item} />
                    </div>);
                })
            )  
        }  
    }
}

export default Productos;