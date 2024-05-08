import { useEffect, useState } from "react"
import apiClient from "../services/api-client"
import {  CanceledError } from "axios"
import { ProductQuery } from "../App"
export interface Rating {
rate:number
count:number
}

export interface Product {
    id:number 
    title:string
    price:number
    category:string
    description:string
    image:string
    rating:Rating

}
const useProducts = (productQuery:ProductQuery  ) => {
    const[products , setProducts] = useState<Product[]>([])
    const [error , setError] = useState('')
    const[isLoading , setLoading] = useState(false)

    useEffect(() => {
        const controller = new AbortController()
        setLoading(true)
       apiClient.get<Product[]>(`/products/${productQuery.category && productQuery.category!=='all' ? `category/${productQuery.category}`:''}` , {signal:controller.signal})  
                .then(
            (res) => {
                setProducts(res.data)
                setLoading(false)
            }
        
        )
        .catch(err =>{
            
            if(err instanceof CanceledError) return
            setError(err.message)
            setLoading(false)
        }
        )
        return () => controller.abort()
    },[productQuery])
    return {products , error,isLoading}
}
export default useProducts