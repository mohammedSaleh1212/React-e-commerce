import { Product } from '../hooks/useProducts'
import ellipsify from '../services/ellipsify'
import Rating from './Rating'
import noImage from '../assets/no-image-placeholder-6f3882e0.webp'




interface Props {
    product: Product
}

const ProductCard = ({ product }: Props) => {
    return (
        <>


            <div className="card  product col-xs-12 col-lg-4 col-xl-3 col-md-5 border-0 p-2 align-items-center" key={product.id}>
                <img src={product.image? product.image : noImage} className="card-img-top   " alt="..." style={{ width: '250px', height: '250px' }}></img>
                <div className="card-body">
                    <h5 className="card-title">{ellipsify(product.title,20)}</h5>
                    <p className="card-text ">{ellipsify(product.description,30)}</p>
                    <div className="rating-wrapper d-flex  gap-2">

                        <Rating rating={product.rating.rate} />
                        <p>({product.rating.count})</p>
                    </div>

                </div>
            </div>
        </>

    )
}

export default ProductCard