import React from 'react';
import Signin from './components/Signin/Signin';
import SignUp from './components/SignUp/SignUp';
import Landing from './components/Landing/Landing';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Layout from './Layout';
import Home from './components/Home/Home';
import Doctors from './components/Doctors/Doctors';
const router=createBrowserRouter(
  createRoutesFromElements(
    <Route>
    <Route path='/home' element={<Layout/>}>
    <Route path='' element={<Home/>} />
    <Route path='doctors' element={<Doctors/>} />
    </Route>
    <Route path='/' element={<Landing/>}/>
    <Route path='/signup' element={<SignUp/>}/>
    <Route path='/signin' element={<Signin/>}/>
    </Route>
  )
)
function App() {
  return (
   <RouterProvider router={router}/>
  )
}

export default App;
