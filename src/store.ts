import { create } from "zustand"
export interface ProductQuery {
    category:string | null
  }
interface ProductQueryStore {
    productQuery:ProductQuery
    setCategory:(category:string) => void
  
}
const useProductQueryStore = create<ProductQueryStore>(set => ({
    productQuery:{category:''} ,
    setCategory:(category) => set(() => ({productQuery:{category}}))

}))
export default useProductQueryStore