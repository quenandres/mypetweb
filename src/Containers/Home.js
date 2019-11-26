import React, {Component} from 'react'

import Header from '../Components/Header';
import Tiendas from './Tiendas';
import Productos from './Productos';

class Home extends Component {
    constructor(props) {
        super();
    }


    render() {
        return(
            <>
                <h1>Bienvenido</h1>
            </>
        );        
    }
}
export default Home;