import { useQuery } from "@tanstack/react-query"
import CategoriesData from '../data/CategoriesData'
import APIClient from "../services/apiClient"



const apiClient = new APIClient<string>('/products/categories')

const useCategories = () => {
    

        return  useQuery<string[],Error>({
            queryKey: ['categories'],
            queryFn: apiClient.getAll,
            staleTime:1000 * 60 *60 *24 , //24 hrs
            initialData:CategoriesData
        })


    
}
export default useCategories