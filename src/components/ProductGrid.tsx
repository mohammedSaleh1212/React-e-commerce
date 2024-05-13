
import useProducts from '../hooks/useProducts'
import Loader from './Loader'
import ProductCard from './ProductCard'
import '../styles/ProductGrid.css'


const ProductGrid = () => {
    const { data:products, error, isLoading } = useProducts()
    // const skeletons  = [1,2,3,4,5,6,7,8]
    
                if(isLoading) return <p>loading</p>
                if(error) return <h1 className='error-message'>{error.message}</h1>

    return (
        
   
            

            <div className=" products-container row container-fluid  mx-auto justify-content-center  ">
                {isLoading && <Loader />}
                {products?.map((product,index) => <ProductCard key={index} product={product} />)}

            </div>





        
    )
}

export default ProductGrid