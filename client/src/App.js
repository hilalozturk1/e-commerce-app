import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Signin from "./pages/Auth/Signin";
import Signup from "./pages/Auth/Signup";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Profile from "./pages/Profile";
import ProtectedRoute from "./pages/ProtectedRoute";
import Basket from "./pages/Basket";
import Error from "./pages/Error";
import Admin from "./pages/Admin";
import ProtectedAdminRoute from "./pages/ProtectedAdminRoute";
import AdminProducts from "./pages/Admin/AdminProducts";
import Orders from "./pages/Admin/Orders";
import Home from "./pages/Admin/Home";
import AdminProductDetail from "./pages/Admin/AdminProductDetail";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <div id="content">
          <Routes>
            {/*route routing among pages*/}
            <Route path="/" element={<Products />}></Route>
            <Route path="product/:product_id" element={<ProductDetail />}></Route>
            <Route path="/signin" element={<Signin />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
            <Route element={<ProtectedRoute />}>
              <Route path="/profile" element={<Profile />} />
            </Route>
            <Route element={<ProtectedAdminRoute />}>
              <Route path="/admin" element={<Admin />}></Route>
              <Route path="/admin/home" element={<Home />}></Route>
              <Route path="/admin/products" element={<AdminProducts />}></Route>
              <Route path="/admin/products/:product_id" element={<AdminProductDetail />}></Route>
              <Route path="/admin/orders" element={<Orders />}></Route>
            </Route>
            <Route path="/basket" element={<Basket />}></Route>
            <Route path="/*" element={<Error />}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
