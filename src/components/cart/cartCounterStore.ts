import { create } from "zustand"
import { Product } from "../../entities/Product"

interface CounterStore {
    counter:number
    items:Product[]
    incrementCount:() => void
    decrementCount:() => void
    resetCount:() => void
    addToCart:(product:Product) => void
    deleteFromCart: (id:number,productPrice:number,quantity:number) => void
    resetItems:() => void
    increaseQuantity:(productPrice:number) => void
    decreaseQuantity:(productPrice:number) => void
    totalPrice:number
}
const useCartCounterStore = create<CounterStore>(set => ({
    counter:0,
    items: [],
    totalPrice:0,
    incrementCount:() => set(store => ({counter:store.counter + 1})),
    decrementCount:() =>set(store =>({counter:store.counter - 1})),
    resetCount:() => set(() => ({counter:0})),
    addToCart: (product) => set((state) => ({totalPrice:state.totalPrice + product.price,counter:state.counter + 1, items: [...state.items, product] })),
    deleteFromCart: (productId,productPrice,quantity) => 
    set((state) => ({totalPrice:state.totalPrice - productPrice * quantity,counter:state.counter -1, items: state.items.filter((item) => item.id !== productId) })),
    resetItems:() => set(() => ({counter:0,items:[],totalPrice:0})),
    increaseQuantity:(productPrice) => set((state) => ({totalPrice:state.totalPrice + productPrice})),
    decreaseQuantity:(productPrice) => set((state) => ({totalPrice:state.totalPrice - productPrice}))
    
    
}))
export default useCartCounterStore