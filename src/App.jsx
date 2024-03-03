import React from 'react';
import Header from './components/Header/Header';
import Signin from './components/Signin/Signin';
import SignUp from './components/SignUp/SignUp';
import Landing from './components/Landing/Landing';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
const router=createBrowserRouter(
  createRoutesFromElements(
    <Route>
    <Route path='/' element={<Landing/>}/>
    <Route path='/signup' element={<SignUp/>}/>
    <Route path='/signin' element={<Signin/>}/>
    <Route path='/header' element={<Header/>}/>
    </Route>
  )
)
function App() {
  return (
   <RouterProvider router={router}/>
  )
}

export default App;
