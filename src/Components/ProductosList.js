import React from 'react'

import '../assets/styles/producto.css';

import {img} from '../assets/images/banoseco.jpg';


import { vetactin } from '../assets/images/vetactin.jpg';
import { viusid } from '../assets/images/viusid.jpg';
import { babemic } from '../assets/images/babemic.jpg';
import { colivet } from '../assets/images/colivet.png';
import { veproflox } from '../assets/images/veproflox.jpg';
import { correas } from '../assets/images/correas.jpg';
import { kitlimpieza } from '../assets/images/kitlimpieza.jpg';
import { sulphur } from '../assets/images/sulphur.jpg';
import { caja } from '../assets/images/caja.jpg';
import { banoseco } from '../assets/images/banoseco.jpg';



const ProductoList = (data) => {
    const logo = data.data.imagen;

    return(
        <div className="containerProducto">
            <div className="logo">
                <img src={process.env.PUBLIC_URL + '/'+logo} alt="logo"/>             
            </div>
            <div className="containerDescripcion">
                <div>{data.data.nombre}</div>
                <div className="descripcion">{data.data.descripcion}</div>
            </div>
      </div>
    );
    
}

export default ProductoList;