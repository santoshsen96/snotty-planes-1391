import react from 'react'
import {Routes,Route} from 'react-router-dom'

import ProductPage from '../Pages/ProductPage'
import Navbar from './Navbar'

const AllRoutes =()=>{
    return (
        <Routes>
            
            <Route path="/product" element={<ProductPage/>}></Route>
            <Route path="/Navbar" element={<Navbar/>}></Route>
            
        </Routes>
    )
}

export default AllRoutes