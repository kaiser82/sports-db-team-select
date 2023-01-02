import logo from './logo.svg';
import { useEffect } from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
import Home from './components/Home/Home';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import AOS from "aos";
import 'aos/dist/aos.css';
import Footer from './components/Footer/Footer';


function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh()
  }, []);
  return (
    <div className="App">
      <Nav></Nav>
      <Home></Home>
      <Footer></Footer>
    </div>
  );
}

export default App;
