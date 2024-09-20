import React, { useEffect, useState } from 'react'
import {getProducto} from "../../asynmock"
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState (null)
  const {idItem} = useParams()

  useEffect(() => {
    getProducto(idItem)
    .then(respuesta => setProducto(respuesta))
  }, [idItem])

  return (
    <div>
      <ItemDetail {...producto}/>
    </div>
  )
}

export default ItemDetailContainer