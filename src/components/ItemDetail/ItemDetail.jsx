import "./ItemDetail.css"


const ItemDetail = ({id, nombre, precio, img}) => {
  return (
    <div className='itemDetail'>
        <img src={img} alt={nombre} />
        <div className='itemDetail1'>
        <h2>{nombre}</h2>
        <p>{id}</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et dolore ab alias a eaque quam, inventore earum quidem accusantium tempore ut voluptates in doloribus iusto deserunt voluptatum adipisci autem rem!</p>
        <p>{precio}</p>
        </div>
        
    </div>
  )
}

export default ItemDetail