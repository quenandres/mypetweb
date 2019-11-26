import React, {Component} from 'react'

import Productos from '../Containers/Productos';
import Header from '../Components/Header';

class ProductosPage extends Component {
    render() { 
        return (
            <>
            <Header />
            <Productos />
            </>
        );
    }
}

export default ProductosPage;