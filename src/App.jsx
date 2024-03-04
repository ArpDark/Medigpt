import React from 'react';
import Header from './components/Header/Header';
import Signin from './components/Signin/Signin';
import SignUp from './components/SignUp/SignUp';
import Landing from './components/Landing/Landing';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Layout from './Layout';
import Home from './components/Home/Home';
import Home2 from './components/Home2/Home2';
const router=createBrowserRouter(
  createRoutesFromElements(
    <Route>
    <Route path='/' element={<Layout/>}>
    <Route path='' element={<Landing/>}/>
    <Route path='home' element={<Home/>} />
    </Route>
    <Route path='/signup' element={<SignUp/>}/>
    <Route path='/signin' element={<Signin/>}/>
    <Route path='/header' element={<Header/>}/>
    <Route path='/homeee' element={<Home2/>}/>
    </Route>
  )
)
function App() {
  return (
   <RouterProvider router={router}/>
  )
}

export default App;
