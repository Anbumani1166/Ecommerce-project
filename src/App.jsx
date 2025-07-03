import { createContext, useState } from 'react'
import TodoApp from './components/TodoApp'
import Login from './components/Login'
import Home from './components/Home'
import Sign from './components/Sign'
import {BrowserRouter as Router,Routes,Route, Link, useLocation} from 'react-router-dom'
import Product from './components/Product'
import Productdetails from './components/Productdetails'
import Productitem from './components/Productitem'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/NavBar'
import NotFound from './components/NotFound'
import NewProduct from './components/NewProduct'
import UpdateProduct from './components/UpdateProduct'
import WhistList from './components/WhistList'

if(!localStorage.getItem("cart")){
  localStorage.setItem("cart",JSON.stringify([]))
}

function App() {
  const location = useLocation();

  // Hide NavBar on these routes
  const hideNavRoutes = ['/', '/login'];
  const shouldShowNav = !hideNavRoutes.includes(location.pathname.toLowerCase());

  
  return (
      <div className='App'>
        {shouldShowNav && <NavBar />}
          <Routes>
            <Route path="/home" element={<Home/>}/>
            <Route path='/Product' element={<Product/>}>
              <Route index element={<Productdetails/>} />
              <Route path='details' element={<Productdetails/>}/>
              <Route path='item' element={<Productitem/>}/>
            </Route>
            <Route path='/' element={<Sign/>}/>
            <Route path='/Login' element={<Login/>}/>
            <Route path='/TodoApp' element={<TodoApp/>}/>
            <Route path='/newProduct' element={<NewProduct/>}/>
            <Route path='/update/:id' element={<UpdateProduct/>}/>
            <Route path='/whistList' element={<WhistList/>}/>
            <Route path='*' element={<NotFound/>}/>
          </Routes>
        
      </div>

  )
}
function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper
