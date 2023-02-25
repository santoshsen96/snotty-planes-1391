import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar'
 import Login from './Pages/Login'
 import Footer from './Pages/Footer'
 import ProductPage from './Pages/ProductPage';
import AllRoutes from './Components/AllRoutes';
function App() {
  return (
    <div className="App">
      <AllRoutes/>
      <Navbar/>
      {/* <Login/> */}
      <Footer/>
      <h1>Basspro</h1>
     
    </div>
  );
}

export default App;
