import React, {Component} from 'react'

import Header from '../Components/Header';


class Compras extends Component {
    constructor(props) {
        super();
        this.state = {
            comprasList:[],
            loading: true
        }
    }
    
    componentWillMount () {
        window.fetch('http://127.0.0.1:8000/api/compras')
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
                this.state.comprasList.map(function(item, i){
                    console.log('test');
                    return <Compra key={i} data = {item} />
                })
            )  
        }  
    }
}

const Compra = (data) => {
    console.log(data);
    return(
        <h1>Hola compra {data.data.nombre}</h1>
    );
}

export default Compras;