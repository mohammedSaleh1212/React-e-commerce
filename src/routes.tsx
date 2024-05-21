 
import {createBrowserRouter} from 'react-router-dom'
import Layout from './pages/Layout'
import HomePage from './pages/HomePage'
import ProductDetailPage from './pages/ProductDetailPage'
import ErrorPage from './pages/ErrorPage'
import CartList from './components/cart/CartList'


const router = createBrowserRouter([
    {path:'/React-e-commerce/' , 
    element:<Layout />,
    errorElement:<ErrorPage /> ,
    children:[

        {path:'', element:<HomePage />},
        {path:'products/:id' , element:<ProductDetailPage />},
        // {path:'products/' , element:<HomePage />,children:[  {path:':id' , element:<ProductDetails />},]},
        {   path:'cart', element:<CartList />},
    
    ]
}

 

])
export default router

