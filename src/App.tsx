import {  useState } from 'react'

import './App.css'
import HomePage from './screens/HomePage'
import ProductGrid from './components/ProductGrid'
import CategoryList from './components/CategoryList'
import useProductQueryStore from './store'

function App() {
  // const [selectedCategory , setSelectedCategory] = useState<string | null>(null)
// const[productQuery , setProductQuery] = useState<ProductQuery>({} as ProductQuery)
// const {productQuery , setCategory} = useProductQueryStore()
  return(
    <>
    
    <HomePage />
    <CategoryList />
    <ProductGrid />
    </>

  )
}

export default App
