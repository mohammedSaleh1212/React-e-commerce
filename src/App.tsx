import { useEffect, useState } from 'react'

import NavigationBar from './components/NavigationBar'
import './App.css'
import HomePage from './screens/HomePage'
import ProductGrid from './components/ProductGrid'

function App() {
  // interface Product {
  //   id:number,
  //   image:string
  // }
  // interface apiRes {
  //   id:number,
  //   image:string
  // }
  // const [apiRes , setApiRes] = useState<apiRes[]>([])
  // useEffect(() => {
  //   fetch("https://fakestoreapi.com/products")
  //   .then(response => response.json())
  //   .then(data => setApiRes(data))
  // },[])
  // return (
  //   <>
  //   {apiRes ? apiRes.map(apiRes => <img src={apiRes.image} alt="" /> ):null}

  //   </>
  // )
  return(
    <>
    
    <HomePage />
    <ProductGrid />
    </>

  )
}

export default App
