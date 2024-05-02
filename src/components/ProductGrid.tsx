
import useProducts from '../hooks/useProducts'
import Loader from './Loader'
import ProductCard from './ProductCard'




const ProductGrid = () => {
    const { products, error ,isLoading} = useProducts()
    // const skeletons  = [1,2,3,4,5,6,7,8]

    return (
        <>
            {error && <h1>{error}</h1>}
        
                <div className=" row mt-5 container-fluid  mx-auto justify-content-center  ">
                    {isLoading && <Loader />}
                {products.map(product => <ProductCard product={product} />)}

                </div>


      


        </>
    )
}

export default ProductGrid