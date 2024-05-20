import { useQuery } from "@tanstack/react-query"
import APIClient from "../services/apiClient"
import useProductQueryStore from "../store"
import { Product } from "../entities/Product"
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