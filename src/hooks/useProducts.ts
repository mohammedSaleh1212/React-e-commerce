import { useQuery } from "@tanstack/react-query"
import APIClient from "../services/apiClient"
import useProductQueryStore from "../store"
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

const useProducts = () => {
    const productQuery = useProductQueryStore(s => s.productQuery)
    const apiClient = new APIClient<Product>(`/products/${productQuery.category && productQuery.category!=='all' ? `category/${productQuery.category}`:''}`)
    
        return  useQuery<Product[],Error>({
            queryKey: ['Products',productQuery],
            queryFn: apiClient.getAll,
            staleTime:10 * 1000
        })



}
export default useProducts