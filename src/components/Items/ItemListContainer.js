import ItemList from './ItemList'

const Items =[
    {
        "id":1,
        "Marca":"Royal Canin",
        "Edad":"Puppy",
        "Tamaño":"Mediano y Grandes",
        "Peso":10,
        "Precio":5000,
        "src": "../../imagenes/bolsasAlimento/royalcanin.png"
    },{
        "id":2,
        "Marca":"Whiskas",
        "Edad":"Senior",
        "Tamaño":"Mediano y Grandes",
        "Peso":5,
        "Precio":3000,
        "src": "../../imagenes/bolsasAlimento/whiskas.jpg"
    },{
        "id":3,
        "Marca":"Pedigree",
        "Edad":"Aulto",
        "Tamaño":"Mediano y Grandes",
        "Peso":15,
        "Precio":6000,
        "src": "../../imagenes/bolsasAlimento/pedigree.jpg"
    }
]

const ItemListContainer=()=>{
    return <ItemList list={Items} />
}




export default ItemListContainer;