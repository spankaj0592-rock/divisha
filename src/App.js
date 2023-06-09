import { BrowserRouter,Route,Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Main from './Components/Main/Main';

function App() {
  return (
   <BrowserRouter>
   <Navbar/>
   <Main/>
    <Routes>
      {/* <Route path="/" element={<Home/>}/> */}
    </Routes>
    <Footer/>
   </BrowserRouter>


  );
}

export default App;
