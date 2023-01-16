import Navbar from './Navbar/navbar.js';
import Footer from './footer/footer.js';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import './App.css';
import Home from "./componets/Home/Home";
import About from "./componets/about/About";
import News from "./componets/news/News";
import Squad from "./componets/squad/Squad";
import Signup from "./componets/signup/signup";



const App = () => {
 
  
  return (<>


   
    <Router>
    <Navbar/>
      
      <Routes>
       <Route path='/' element={<Home/>}></Route>
      </Routes>
      <Routes>
       <Route path='/about' element={<About/>}></Route>
      </Routes>
      <Routes>
       <Route path='/squad' element={<Squad/>}></Route>
      </Routes>
      <Routes>
       <Route path='/news' element={<News/>}></Route>
      </Routes>
      <Routes>
       <Route path='/signup' element={<Signup/>}></Route>
      </Routes>

    </Router>

    <Footer/>
  </>);
}

export default App;
