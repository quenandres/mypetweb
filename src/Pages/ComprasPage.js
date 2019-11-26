import React, {Component} from 'react'

import Compras from '../Containers/Compras';
import Header from '../Components/Header';

class ComprasPage extends Component {
    render() { 
        return (
            <>
            <Header />
            <Compras />
            </>
        );
    }
}

export default ComprasPage;