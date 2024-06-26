import { Product } from "../entities/Product"
import ellipsify from '../services/ellipsify'
import Rating from './Rating'
import noImage from '../assets/no-image-placeholder-6f3882e0.webp'
import { useNavigate } from 'react-router-dom'
import "aos/dist/aos.css";


import AOS from "aos";
import { useEffect } from 'react'
import '../styles/loveButton.css'
import CardButton from "./CardButton"
import LoveButton from "./LoveButton"




interface Props {
    product: Product
}

const ProductCard = ({ product }: Props) => {
    useEffect(() => {
        AOS.init({
            //   disable: "phone",
            duration: 700,
            easing: "ease-out-cubic",
        });
    }, []);

    const navigate = useNavigate()

    return (
        <>


            <div className="card  product col-xs-12 col-lg-4 col-xl-3 col-md-5 border-0 p-2 align-items-center" key={product.id} data-aos="fade-up"
                data-aos-anchor-placement="top-center">
                <div className="product-image-wrapper">
                    <img src={product.image ? product.image : noImage} className="card-img-top" alt="..." style={{ width: '250px', height: '250px', cursor: 'pointer' }}
                        onClick={(event) => {
                            event.preventDefault()
                            navigate(`/React-e-commerce/products/${product.id}`)

                        }}>

                    </img>
                </div>
                <div className="card-body">
                    <h5 className="card-title">{ellipsify(product.title, 20)}</h5>
                    <p className="card-text ">{ellipsify(product.description, 30)}</p>
                    <div className="rating-wrapper d-flex  gap-2">

                        <Rating rating={product.rating.rate} />
                        <p>({product.rating.count})</p>
                    </div>
                    <div className="card-button-wrapper d-flex gap-2">

                    <CardButton product={product} />
                    <LoveButton />
                    </div>


                </div>
            </div>
        </>

    )
}

export default ProductCard

