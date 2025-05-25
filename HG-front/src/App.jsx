import { BrowserRouter,Routes,Route } from "react-router-dom";
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
import PrivateRoute from "./PrivateRoute";
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

            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<LoginSignup/>}/>

            <Route path="/gallery" element={<PrivateRoute><Gallery/></PrivateRoute>}/>
            <Route path="/services" element={<PrivateRoute><ServicesPage/></PrivateRoute>}/>
            <Route path="/products" element={<PrivateRoute><Product/></PrivateRoute>}>
              <Route path=":productId" element={<PrivateRoute><Product/></PrivateRoute>}/>
            </Route>
            <Route path="/contact" element={<PrivateRoute><Contact/></PrivateRoute>}/>
            <Route path="/product/:id" element={<PrivateRoute><ProductDisplay/></PrivateRoute>}/>
            <Route path="/cart" element={<PrivateRoute><CartPage/></PrivateRoute>}/>
            <Route path="/checkout" element={<PrivateRoute><CheckoutPage /></PrivateRoute>} />
          </Routes>
          <Footer />
          </BrowserRouter>
        </CartProvider>
      </AuthProvider>
    </div>
  );
}

export default App
