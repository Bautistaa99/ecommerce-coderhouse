import Items from './Items';



    //ForEach en React se hacen con un .map
const ItemsList=({list})=>{
    return(
    <div>
        {list.map((item)=>(
            <Items src={item.href} alt={item.marca}/>
        ))} 
    </div>
    );
};

export default ItemsList;