import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from './pages/Home/Home';
import Accounts from './pages/Accounts/Accounts';
import Cart from './pages/Cart/Cart';
import Carts from './pages/Carts/Carts';
import Login from './pages/Login/Login';

function App() {
  return (
  //   <BrowserRouter>
  //   <Routes>
  //     <Route path="/" element={<Home/>}/>
  //     <Route path="/accounts" element={<Accounts/>}/>
  //     <Route path="/carts" element={<Carts/>}/>
  //     <Route path="/cart" element={<Cart/>}/>
  //     <Route path="/login" element={<Login/>}/>
  //   </Routes>
  // </BrowserRouter>
  <Home/>
  );
}

export default App;
