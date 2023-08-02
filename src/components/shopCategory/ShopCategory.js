import './ShopCategory.css'
import ShopCard from '../shopCard/ShopCard'
const ShopCategory=(props)=>{
    console.log(props)
return(
    <div>
    <h2>{props.name}</h2>
    <div className='shop-content'>
     {props.items.map((element)=>(
         <ShopCard key={element.id} item={element}/>
         ))}
     
    </div>
    </div>
)
}
export default ShopCategory
