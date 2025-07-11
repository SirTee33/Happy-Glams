import { BrowserRouter,Routes,Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import ServicesPage from "./Pages/ServicesPage";
import { CartProvider } from './Components/CartContext/CartContext';
import Contact from "./Pages/Contact";
import LoginPage from "./Pages/LoginPage";
import Home from "./Pages/Home";
import CheckoutPage from "./Components/CheckOutPage/CheckoutPage";
import Product from "./Pages/Product";
import ProductDisplay from "./Components/ProductDisplay/ProductDisplay";
import CartPage from "./Pages/CartPage"
import LoginSignup from "./Pages/LoginSignup";
import Gallery from "./Pages/Gallery";
import ScrollToTop from "./Components/ScrollTop/ScrollTop";
//import PrivateRoute from "./PrivateRoute";
import { AuthProvider } from "./AuthContext";

function App() {
  
  return (
    <div>
      <AuthProvider>
        <CartProvider>
          <BrowserRouter>
          <Navbar /> 
          <ScrollToTop /> 
          <Routes>
            <Route path="/" element={<Home/>}/>

            <Route path="/login" element={<LoginPage />}/>
            <Route path="/signup" element={<LoginSignup />}/>

            <Route path="/gallery" element={<Gallery />}/>
            <Route path="/services" element={<ServicesPage />}/>
            <Route path="/products" element={<Product />}>
              <Route path=":productId" element={<Product />}/>
            </Route>
            <Route path="/contact" element={<Contact />}/>
            <Route path="/product/:id" element={<ProductDisplay />}/>
            <Route path="/cart" element={<CartPage />}/>
            <Route path="/checkout" element={<CheckoutPage />} />
          </Routes>
          <ToastContainer position="top-right" autoClose={3000} />
          <Footer />
          </BrowserRouter>
        </CartProvider>
      </AuthProvider>
    </div>
  );
}

export default App
