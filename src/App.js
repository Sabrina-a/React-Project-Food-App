import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Recipes from './Components/Recipes/Recipes';
import Settings from './Components/Settings/Settings';
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
<BrowserRouter>
<Navbar/>
    <div className='container main'>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/recipes' element={<Recipes/>} />
          <Route path='/settings' element={<Settings/>} />
        </Routes>
  </div>
  <Footer/>

</BrowserRouter>
  
  );
}

export default App;
