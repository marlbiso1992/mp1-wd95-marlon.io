/*Main pages*/ 
import Home from './components/pages/Home';
import About from './components/pages/About';
import Workers from './components/pages/Workers';
import Review from './components/pages/Review';

import Contact from './components/pages/Contact';
import Login from './components/pages/Login';
/*Hidden pages*/ 
import Register from './components/pre-pages/register';
import Profile from './components/pre-pages/profile';
import UpdateProfile  from './components/pre-pages/update-profile';
import Admin from './components/pre-pages/admin';

import RootLayout from './components/global/RootLayout';
import InnerRootLayout from './components/global/InnerRootLayout';

import  { Route, Routes } from 'react-router-dom';

const App = () => {
   return (
    <Routes>
      <Route element={<RootLayout />}>  
       <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/workers' element={<Workers />} />
        <Route path='/review' element={<Review />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/registration' element={<Register />} />
 
        </Route>
        <Route element={<InnerRootLayout />}>
        <Route path='/admin' element={<Admin />} />
        <Route path='/user/:username' element={<Profile />} />
        <Route path='/update-profile/:id' element={<UpdateProfile />} />
     </Route>
    </Routes>
  );

}

export default App;
