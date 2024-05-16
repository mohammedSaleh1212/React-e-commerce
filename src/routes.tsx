 
import {createBrowserRouter} from 'react-router-dom'
import Layout from './pages/Layout'
import HomePage from './pages/HomePage'
import ProductDetailPage from './pages/ProductDetailPage'
import ErrorPage from './pages/ErrorPage'


const router = createBrowserRouter([
    {path:'/React-e-commerce/' , 
    element:<Layout />,
    errorElement:<ErrorPage /> ,
    children:[

        {index:true , element:<HomePage />},
        {path:'products/:id' , element:<ProductDetailPage />},
        // {path:'products/' , element:<HomePage />,children:[  {path:':id' , element:<ProductDetails />},]},
    
    ]
}

 

])
export default router
