import React from 'react'

import '../assets/styles/producto.css';



import vetactin from '../assets/images/Productos/vetactin.jpg';
import viusid from '../assets/images/Productos/viusid.jpg';
import babemic from '../assets/images/Productos/babemic.jpg';
import colivet from '../assets/images/Productos/colivet.png';
import veproflox from '../assets/images/Productos/veproflox.jpg';
import correas from '../assets/images/Productos/correas.jpg';
import kitlimpieza from '../assets/images/Productos/kitlimpieza.jpg';
import sulphur from '../assets/images/Productos/sulphur.jpg';
import caja from '../assets/images/Productos/caja.jpg';
import banoseco from '../assets/images/Productos/banoseco.jpg';



const ProductoList = (data) => {
    const logo = data.data.imagen;

    return(
        <div className="containerProducto">
            <div className="logo">
                <img src={ logo } alt="logo"/>             
            </div>
            <div className="containerDescripcion">
                <div>{data.data.nombre}</div>
                <div className="descripcion">{data.data.descripcion}</div>
            </div>
      </div>
    );
    
}

export default ProductoList;