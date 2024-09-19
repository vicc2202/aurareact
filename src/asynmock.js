const catalogo= [
    {id: 1, nombre: "Soothing Cream", precio: 5000, img:"../public/imagenes/crema1.jpeg"},
    {id: 2, nombre: "Cream", precio: 4500, img:"../public/imagenes/crema2.jpeg"},
    {id: 3, nombe: "Tea-Trica B5 Cream", precio: 6000, img:"../public/imagenes/crema3.jpeg"},
    {id: 4, nombre: "Poremizing Light Gel Cream", precio: 6500, img: "../public/imagenes/crema4.jpeg"},
    {id: 5, nombre: "Light Cleansing Oil", precio: 7000, img: "../public/imagenes/limpiador1.jpeg"},
    {id: 6, nombre: "Ampoule Foam", precio: 5500, img: "../public/imagenes/limpiador2.jpeg"},
    {id: 7, nombre: "Tea-Trica BHA Foam", precio: 8000, img: "../public/imagenes/limpiador3.jpeg"},
    {id: 8, nombre: "Tone Brightening Cleansing Gel Foam", precio: 8500, img: "../public/imagenes/limpiador4.jpeg"},
    {id: 9, nombre: "Ampoule", precio: 6000, img: "../public/imagenes/serum1.jpeg"},
    {id: 10, nombre: "Probio Cica Intensive Ampoule", precio: 7000, img: "../public/imagenes/serum2.jpeg"},
    {id: 11, nombre: "Hyalu-Cica First Ampoule", precio: 8000, img: "../public/imagenes/serum3.jpeg"},
    {id: 12, nombre: "Poremizing Fresh Ampoule", precio: 7000, img: "../public/imagenes/serum4.jpeg"},
    {id: 13, nombre: "Toning Toner", precio: 5500, img: "../public/imagenes/tonico1.jpeg"},
    {id: 14, nombre: "Hyalu-Cica Brightening Toner", precio: 6500, img: "../public/imagenes/tonico2.jpeg"},
]

export const getCatalogo = () =>{
    return new Promise((resolve) =>{
        setTimeout(() => {
            resolve(catalogo)
        }, 2000);
    })
}

export const getProducto = (id) => {
    return new Promise (resolve => {
        setTimeout(() => {
            const producto = catalogo.find(item => item.id === id)
            resolve(producto)
        }, 2000)
    })
}