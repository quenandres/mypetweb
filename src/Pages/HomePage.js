import React, {Component} from 'react'

import Home from '../Containers/Home';
import Header from '../Components/Header';

class HomePage extends Component {
    render() { 
        return (
            <>
            <Header />
            <Home />
            </>
        );
    }
}

export default HomePage;