import React from 'react'
import "./Item.css"

const Item = ({id, nombre, precio, img}) => {
  return (
    <div className='cardProducto'>
        <img src={img} alt={nombre}/>
        <h3>{nombre}</h3>
        <p>${precio}</p>
        <p>ID: {id}</p>
        <button>Ver más</button>
    </div>
  )
}

export default Item