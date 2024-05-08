import {  useState } from 'react'

import './App.css'
import HomePage from './screens/HomePage'
import ProductGrid from './components/ProductGrid'
import CategoryList from './components/CategoryList'
export interface ProductQuery {
  category:string | null
}

function App() {
  // const [selectedCategory , setSelectedCategory] = useState<string | null>(null)
const[productQuery , setProductQuery] = useState<ProductQuery>({} as ProductQuery)
  return(
    <>
    
    <HomePage />
    <CategoryList selectedCategory={productQuery.category} onSelectCategory={(category) =>setProductQuery({...productQuery ,  category})}/>
    <ProductGrid  productQuery={productQuery} />
    </>

  )
}

export default App
