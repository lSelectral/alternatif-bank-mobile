import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from './pages/Home/Home';
import Accounts from './pages/Accounts/Accounts';
import Card from './pages/Card/Card';
import Cards from './pages/Cards/Cards';
import Login from './pages/Login/Login';
import AlternativeLogin from "./pages/AlternativeLogin/AlternativeLogin";

function App() {
    return (
        <BrowserRouter basename="/alternatif-bank-mobile">
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/accounts" element={<Accounts/>}/>
                <Route path="/cards" element={<Cards/>}/>
                <Route path="/card" element={<Card/>}/>
                <Route path="/login" element={<AlternativeLogin/>}/>
                <Route path="*" element={<Home/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
