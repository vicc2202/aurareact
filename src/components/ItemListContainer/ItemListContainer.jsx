import { useState, useEffect } from "react"
import { getCatalogo, getCategoria } from "../../asynmock"
import { useParams } from "react-router-dom"
import ItemList from "../ItemList/ItemList"
import "./ItemListContainer.css"

const ItemListContainer = () => {
  const [productos, setProductos] = useState([])
  const {idCategoria} = useParams ()
  useEffect( () => {
    const funcionProductos = idCategoria ? getCategoria : getCatalogo;
    funcionProductos(idCategoria)
    .then(res=> setProductos(res))
  }, [idCategoria])
  return (
    <>
      <h2>Productos</h2>
      <ItemList productos={productos}/>
    </>
  )
}

export default ItemListContainer