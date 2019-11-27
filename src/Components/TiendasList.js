import React from 'react'

import '../assets/styles/producto.css';

const ProductoList = (data) => {
    const logo = data.data.imagen;
    console.log(logo);
    const imagen = `assets/images/Productos/${logo}`;

    return(
        <div className="containerProducto">
            <div className="logo">
                <img src={imagen} />                
            </div>
            <div className="containerDescripcion">
                <div>{data.data.nombre}</div>
                <div className="descripcion">{data.data.descripcion}</div>
            </div>
      </div>
    );
}

export default ProductoList;