
import useProducts from '../hooks/useProducts'
import Loader from './Loader'
import ProductCard from './ProductCard'
import '../styles/ProductGrid.css'
import { ProductQuery } from '../App'


interface Props {
    productQuery:ProductQuery 
    // selectedCategory:string | null

}

const ProductGrid = ({productQuery}:Props) => {
    const { products, error, isLoading } = useProducts(productQuery)
    // const skeletons  = [1,2,3,4,5,6,7,8]

    return (
        <>
            {error && <h1 className='error-message'>{error}</h1>}
            

            <div className=" products-container row container-fluid  mx-auto justify-content-center  ">
                {isLoading && <Loader />}
                {products.map(product => <ProductCard product={product} />)}

            </div>





        </>
    )
}

export default ProductGrid