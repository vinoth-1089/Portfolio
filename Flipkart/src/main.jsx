
import { createRoot } from 'react-dom/client'
import Index from './index.jsx'
import Cart from './cart.jsx'
import Login from './login.jsx'
import Seller from './seller.jsx'
import { RouterProvider,createBrowserRouter} from 'react-router-dom'

const router = createBrowserRouter([
    {
        path:'/',
        element: <Index/>
    },
     {
        path:'/cart',
        element: <Cart/>
    },
    {
        path:'/login',
        element:<Login/>
    },
    {
        path:'/seller',
        element:<Seller/>
    }
])

createRoot(document.getElementById('root')).render(

    <RouterProvider router={router}/>

)
