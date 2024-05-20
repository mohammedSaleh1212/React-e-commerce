import  { useState } from 'react'
import { Product } from '../../entities/Product'
import ExpandableText from '../ExpandableText'
import useCartCounterStore from './cartCounterStore'
import { useNavigate } from 'react-router-dom'
interface Props {
    item: Product

}

const CartItem = ({ item }: Props) => {
    const { deleteFromCart, increaseQuantity, decreaseQuantity } = useCartCounterStore()
    const navigate = useNavigate()

    const [quantity, setQuantity] = useState<number>(1)

    return (
        <li key={item.id} className="list-group-item mt-4">
            <div className="row mt-2">
                <div className="col-md-3 text-center">
                    <img src={item.image} alt={item.title} className="img-fluid  " style={{width:'120px',cursor:'pointer'}} onClick={(event) => {
                        {
                            event.preventDefault()
                            navigate(`/products/${item.id}`)
    
                        }
                    }} />
                </div>
                <div className="col-md-9">
                    <h4>{item.title}</h4>
                    <ExpandableText text={item.description}></ExpandableText>
                    <p>Price: ${item.price.toFixed(2)}</p>
                    <div className="amount-manager d-flex align-items-center">
                        <button className='btn ' onClick={() => {
                            increaseQuantity(item.price)
                            setQuantity(quantity + 1)
                        }
                        }>+</button>
                        <div>{quantity}</div>
                        <button className='btn ' onClick={() => {
                            if (quantity == 0) return
                            decreaseQuantity(item.price)
                            setQuantity(quantity - 1)

                        }}>-</button>
                    <i className="bi bi-trash cursor-pointer" onClick={() => deleteFromCart(item.id, item.price, quantity)} style={{cursor:'pointer'}}></i>
                    </div>

                </div>
            </div>
        </li>
    )
}

export default CartItem