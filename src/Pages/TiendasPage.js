import React, {Component} from 'react'

import Tiendas from '../Containers/Tiendas';
import Header from '../Components/Header';

class TiendasPage extends Component {
    render() { 
        return (
            <>
                <Header />
                <Tiendas />
            </>
        );
    }
}

export default TiendasPage;