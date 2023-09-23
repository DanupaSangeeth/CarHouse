import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Navbar from './components/molecules';

import Footer from './components/Footer';

import Home from './components/pages/Home';
import About from './components/pages/About';
import Register from './components/pages/Register/Register';
import CarV from './components/molecules/CarV';














const App=()=>{
  return(
    <BrowserRouter>
    <Navbar/>
    <CarV/>
   
    
    
    <main>
        <Routes>
            <Route path="/home" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/signup" element={<Register/>}/>
            
            
            
        </Routes>
      </main>
      <Footer/>
    </BrowserRouter>
  
  );
}


export default App;
