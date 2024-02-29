
import User from './components/layout/users/user';
import About from './components/About';
import Contact from './components/Contact';
import Todo from './components/Todo';
import Product from './components/Product';
import Checkout from './components/Checkout';
import Hooks from './components/Hooks';
import Hooks2 from './components/HooksFix';


import Login from './components/Login';
import RootLayout from './components/global/RootLayout';


import  { Route, Routes } from 'react-router-dom';

const App = () => {
 

  return (
    <Routes>
      <Route element={<RootLayout />}>  
       <Route path='/' element={<User />} />
        <Route path='/home' element={<User />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/todo' element={<Todo />} />
        <Route path='/product' element={<Product />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/hooks' element={<Hooks />} />
        <Route path='/hooks2' element={<Hooks2 />} />
        
        <Route path='/login' element={<Login />} />
     </Route>

   { /*  <Route element={<AdminLayout />}>  
        <Route path='/home' element={<User />} />
  </Route> */ }


    </Routes>
  );

}

export default App;
