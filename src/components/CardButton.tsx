import { useState } from 'react'
import { Product } from '../entities/Product'
import useCartCounterStore from './cart/cartCounterStore'
interface Props {
    product:Product
}
const CardButton = ({product}:Props) => {
    const [clickedButton,setClickedButton] = useState<Boolean>(false)
    const { addToCart } = useCartCounterStore()

  return (
  <button className={`btn btn-first w-100 ${clickedButton ? 'selected-button':''}`} onClick={() =>
{
    setClickedButton(true)
    addToCart(product)
}
  }>
    {clickedButton ?'Added To Cart':'Add To Cart'}
    </button>
  )
}

export default CardButton