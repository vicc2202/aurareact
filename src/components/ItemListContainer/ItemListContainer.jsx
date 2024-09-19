import { useState, useEffect } from "react"
import { getCatalogo } from "../../asynmock"
import ItemList from "../ItemList/ItemList"
import "./ItemListContainer.css"

const ItemListContainer = () => {
  const [productos, setProductos] = useState([])
  useEffect( () => {
    getCatalogo ()
    .then(respuesta => setProductos(respuesta))
    .catch(error => console.log(error))
  }, [])
  return (
    <>
      <h2>Productos</h2>
      <ItemList productos={productos}/>
    </>
  )
}

export default ItemListContainer