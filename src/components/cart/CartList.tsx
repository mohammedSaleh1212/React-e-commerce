

import useCartCounterStore from './cartCounterStore'
import CartItem from './CartItem'


const CartList = () => {
    const { items, resetItems , totalPrice } = useCartCounterStore()
    // const [quantity, setQuantity] = useState<number>(0)
    // const totalAmount = items.reduce((total, item) => total + item.price * quantity, 0);
    return (
        <div className="container">
            <h2 className='text-center'>Shopping Cart</h2>
            <ul className="list-group">
                {items.map((item) => (
  <CartItem key={item.id} item={item}/>
                ))}
            </ul>
                <div className="total-price">Total Price :{totalPrice.toFixed(2)}$</div>
            <button className={`btn btn-first mt-4 ${items.length ? '' : 'd-none'}`} onClick={() => resetItems()}>Clean Cart</button>
            <button className={`btn btn-first mt-4 ${items.length ? '' : 'd-none'}`}>Proceed To Check Out</button>

        </div>

    )
}

export default CartList