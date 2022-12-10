import { useContext } from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import  {ContextGlobal} from "./Components/utils/global.context";
import Contact from "./Routes/Contact";
import Detail from "./Routes/Detail";
import Favs from "./Routes/Favs";
import Home from "./Routes/Home";


function App() {

  const {theme, routes} = useContext(ContextGlobal);  
  return (
    <BrowserRouter>
    <div style={{background: theme.background, color: theme.color}} id="app">
      <Navbar/>

         
        <Routes>
        <Route path={routes.Home} element={<Home></Home>}></Route>
        <Route path={routes.Contact} element={<Contact></Contact>}></Route>
        <Route path={routes.Favs} element={<Favs></Favs>}></Route>
        <Route path="/dentist/:id" element={<Detail></Detail>}></Route>
        {   }
        </Routes>
          
        <Outlet>
        </Outlet>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}


export default App;
