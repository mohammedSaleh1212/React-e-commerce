import { useParams } from 'react-router-dom'
import useProduct from '../hooks/useProduct'
import Rating from '../components/Rating'
import '../styles/productDetails.css'
import {  useState } from 'react'
import ExpandableText from '../components/ExpandableText'
import LoveButton from '../components/LoveButton'
import CardButton from '../components/CardButton'




const ProductDetailPage = () => {
  const colors = ['red ','green','blue','gray']
  // const [selectedImg,setSelectedImg] = useState<string>('none')

  const [selectedColor,setSelectedColor] = useState<string>('none')

 
 const {id} = useParams()

 const { data:product, error, isLoading } = useProduct(id!)
 if(isLoading) return <div>loading</div>
 if(error || !product)  throw   error
  
  return (
    <>
<div className="container" >
  <div className="row">
    <div className="col-12 col-md-6">
      <div className="item-image d-flex justify-content-center d-md-block text-center">

    <img src={product.image ? product.image : ''} className="card-img-top " alt="..." style={{ width: '350px', maxWidth:'100%', height:'400px' }}></img>
      </div>
      <div className="item-sub-images d-flex gap-2 justify-content-center mt-4">
    <img src={product.image ? product.image : ''} className="card-sub-img " alt="..." style={{ width: '60px', height:'70px' }}></img>
    <img src={product.image ? product.image : ''} className="card-sub-img " alt="..." style={{ width: '60px', height:'70px' }}></img>
    <img src={product.image ? product.image : ''} className="card-sub-img " alt="..." style={{ width: '60px', height:'70px' }}></img>
    <img src={product.image ? product.image : ''} className="card-sub-img " alt="..." style={{ width: '60px', height:'70px' }}></img>

      </div>

    </div>
    <div className="col-12 col-md-6">
      
<h1>{product.title}</h1>
<div className="rating-wrapper d-flex gap-2">

<Rating rating={product.rating.rate} />
<p>({product.rating.count})</p>
</div>

<p>{product.price}$</p>
<ExpandableText text = {product.description}/>
<h2>Color</h2>
<div className="color-wrapper d-flex gap-2">
{colors.map(color => <span key={color} className={`dot ${selectedColor == color ? ' active-color':''}`} onClick={() => setSelectedColor(color)} style={{backgroundColor:color}}></span> )}

</div>


<div className="btn-wrapper w-100 d-flex gap-2 mt-3">
 <CardButton product={product} />
  <LoveButton />
</div>

    </div>
  </div>
</div>
 

    </>
  )
}

export default ProductDetailPage