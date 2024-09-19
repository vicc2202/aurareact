import React, { useEffect, useState } from 'react'
import {getProducto} from "../../asynmock"
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState (null)

  useEffect(() => {
    getProducto(1)
    .then(respuesta => setProducto(respuesta))
  }, [])

  return (
    <div>
      <ItemDetail {...producto}/>
    </div>
  )
}

export default ItemDetailContainer