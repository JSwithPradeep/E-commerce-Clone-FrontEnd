
import './App.css';
import Navbar from './component/Navbar';
import Newnav from './newNavbar/newNav';
import Main from './component/home/Main';
import Footer from './component/footer/Footer';
import Singup from './component/signUp_sinIn/Singup';
import Signin from './component/signUp_sinIn/Signin';
import Cart from './component/card/Cart';
import Buynow from './component/buynow/Buynow';
import { Routes,Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Newnav/>
      <Routes>
        <Route path='/' element={<Main/>} />
        <Route path='/login' element={<Signin/>} />
        <Route path='/signup' element={<Singup/>} />
        <Route path='/getproductone/:id' element={<Cart/>} />
        <Route path='/buynow' element={<Buynow/>} />
      </Routes>
    <Footer/>
      
      
    </div>
  );
}

export default App;
