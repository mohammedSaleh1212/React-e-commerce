import useCartCounterStore from "./cartCounterStore"


const Cart = () => {
  const {counter} = useCartCounterStore() 
 return (
    <i className="bi bi-cart-plus fs-3 ms-2">{counter > 0 ? counter : ''}</i>
  )
}

export default Cart