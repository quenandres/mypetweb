import React,{ Component } from 'react'

import '../assets/styles/tienda.css';


import clinica_veterinaria from '../assets/images/Veterinarias/clinica_veterinaria.jpeg';
import hospital_animal from '../assets/images/Veterinarias/hospital_animal.jpeg';
import mevet from '../assets/images/Veterinarias/mevet.jpeg';
import tienda_patitas from '../assets/images/Veterinarias/tienda_patitas.png';
import Veterinaria_cats from '../assets/images/Veterinarias/Veterinaria_cats.jpeg';

class TiendaList extends Component {
    
    render() {
        return(
            <div>
                <div className="containerTienda">                    
                    <div className="nombreVeterinaria">Clinica veterinaria</div>
                    <img src={clinica_veterinaria} alt="logo" className="logoTienda"/>                    
                </div>
                <div className="containerTienda">                    
                    <div className="nombreVeterinaria">Hospital animal</div>
                    <img src={hospital_animal} alt="logo" className="logoTienda"/>                    
                </div>
                <div className="containerTienda">                    
                    <div className="nombreVeterinaria">Mevet</div>
                    <img src={mevet} alt="logo" className="logoTienda"/>                    
                </div>
                <div className="containerTienda">                    
                    <div className="nombreVeterinaria">Tienda patitas</div>
                    <img src={tienda_patitas} alt="logo" className="logoTienda"/>                    
                </div>
                <div className="containerTienda">                    
                    <div className="nombreVeterinaria">Veterinaria Cats</div>
                    <img src={Veterinaria_cats} alt="logo" className="logoTienda"/>                    
                </div>
            </div>
            
        );
    }
    
}

export default TiendaList;