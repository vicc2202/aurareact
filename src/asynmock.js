const catalogo= [
    {id: "1", nombre: "Soothing Cream", precio: 5000, img:"../public/imagenes/crema1.jpeg", categoria:"cremas"},
    {id: "2", nombre: "Cream", precio: 4500, img:"../public/imagenes/crema2.jpeg", categoria:"cremas"},
    {id: "3", nombre: "Tea-Trica B5 Cream", precio: 6000, img:"../public/imagenes/crema3.jpeg", categoria:"cremas"},
    {id: "4", nombre: "Poremizing Light Gel Cream", precio: 6500, img: "../public/imagenes/crema4.jpeg", categoria:"cremas"},
    {id: "5", nombre: "Light Cleansing Oil", precio: 7000, img: "../public/imagenes/limpiador1.jpeg", categoria:"limpiadores"},
    {id: "6", nombre: "Ampoule Foam", precio: 5500, img: "../public/imagenes/limpiador2.jpeg", categoria:"limpiadores"},
    {id: "7", nombre: "Tea-Trica BHA Foam", precio: 8000, img: "../public/imagenes/limpiador3.jpeg", categoria:"limpiadores"},
    {id: "8", nombre: "Tone Brightening Cleansing Gel Foam", precio: 8500, img: "../public/imagenes/limpiador4.jpeg", categoria:"limpiadores"},
    {id: "9", nombre: "Ampoule", precio: 6000, img: "../public/imagenes/serum1.jpeg", categoria:"serums"},
    {id: "10", nombre: "Probio Cica Intensive Ampoule", precio: 7000, img: "../public/imagenes/serum2.jpeg", categoria:"serums"},
    {id: "11", nombre: "Hyalu-Cica First Ampoule", precio: 8000, img: "../public/imagenes/serum3.jpeg", categoria:"serums"},
    {id: "12", nombre: "Poremizing Fresh Ampoule", precio: 7000, img: "../public/imagenes/serum4.jpeg", categoria:"serums"},
    {id: "13", nombre: "Toning Toner", precio: 5500, img: "../public/imagenes/tonico1.jpeg", categoria:"tonicos"},
    {id: "14", nombre: "Hyalu-Cica Brightening Toner", precio: 6500, img: "../public/imagenes/tonico2.jpeg", categoria:"tonicos"},
]

export const getCatalogo = () =>{
    return new Promise((resolve) =>{
        setTimeout(() => {
            resolve(catalogo)
        }, 100);
    })
}

export const getProducto = (id) => {
    return new Promise (resolve => {
        setTimeout(() => {
            const producto = catalogo.find(item => item.id === id)
            resolve(producto)
        }, 200)
    })
}

export const getCategoria = (idCategoria) =>{
    return new Promise(resolve =>{
        setTimeout(() => {
            const producto = catalogo.filter(item => item.categoria === idCategoria)
            resolve(producto)
        }, 100);
    })
}