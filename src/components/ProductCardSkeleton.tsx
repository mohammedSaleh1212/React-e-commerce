
import React from 'react'
import skeletonImg from '../assets/no-image-placeholder-6f3882e0.webp'

const ProductCardSkeleton = () => {
  return (
<div className="card product col-xs-12 col-lg-4 col-xl-3 col-md-5 border-0 p-2 align-items-center " aria-hidden="true">
  <img src={'..'} className="card-img-top" alt="..." style={{ width: '250px', height: '250px',background:'#eee' }}></img>
  <div className="card-body">
    <h5 className="card-title placeholder-glow">
      <span className="placeholder w-100"></span>
    </h5>
    <p className="card-text placeholder-glow">
      <span className="placeholder w-100"></span>

    </p>
   
  </div>
</div>
  )
}

export default ProductCardSkeleton