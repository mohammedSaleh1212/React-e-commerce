import { useQuery } from "@tanstack/react-query"
import APIClient from "../services/apiClient"
import { Product } from "../entities/Product"

const apiClient = new APIClient<Product>('/products/')
const useProduct = (id:string) => {
    
        return  useQuery<Product,Error>({
            queryKey: ['Products',id],
            queryFn:() => apiClient.getOne(id),
            staleTime:10 * 1000
        })



}
export default useProduct