import { useParams } from 'react-router-dom'
import useProduct from '../hooks/useProduct'

const ProductDetailPage = () => {
 const {id} = useParams()
 const { data:product, error, isLoading } = useProduct(id!)
 if(isLoading) return <div>loading</div>
 if(error || !product)  throw   error
  
  return (
    <>
    <div>{product.description}</div>
    <div>{product.price}</div>

    </>
  )
}

export default ProductDetailPage