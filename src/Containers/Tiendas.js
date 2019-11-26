import React, {Component} from 'react'

import Header from '../Components/Header';


class Tiendas extends Component {
    constructor(props) {
        super();
        this.state = {
            tiendasList:[],
            loading: true
        }
    }
    
    componentWillMount () {
        window.fetch('http://127.0.0.1:8000/api/tiendas')
        .then(response => {
            return response.json();
        })
        .then(response => {
            this.setState({ tiendasList: response.data, loading:false });
        });
    }


    render() {  
        
        if ( this.state.loading ) {
            return(    
                <h1>Cargando...</h1>                
            )  
        } else {
            return(
                this.state.tiendasList.map(function(item, i){
                    console.log('test');
                    return <Tienda key={i} data = {item} />
                })
            )  
        }  
    }
}

const Tienda = (data) => {
    console.log(data);
    return(
        <h1>Hola tienda {data.data.nombre}</h1>
    );
}

export default Tiendas;