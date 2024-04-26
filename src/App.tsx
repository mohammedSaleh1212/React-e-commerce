import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  interface Product {
    id:number,
    image:string
  }
  interface apiRes {
    id:number,
    image:string
  }
  const [apiRes , setApiRes] = useState<apiRes[]>([])
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
    .then(response => response.json())
    .then(data => setApiRes(data))
  },[])
  return (
    <>
    {apiRes ? apiRes.map(apiRes => <img src={apiRes.image} alt="" /> ):null}

    </>
  )
}

export default App
