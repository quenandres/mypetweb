import React, {Component} from 'react'

import Perfil from '../Containers/Perfil';
import Header from '../Components/Header';

class PerfilPage extends Component {
    render() { 
        return (
            <>
            <Header />
            <Perfil />
            </>
        );
    }
}

export default PerfilPage;