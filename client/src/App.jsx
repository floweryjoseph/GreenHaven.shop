import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./user/pages/loginUser";
import Home from "./user/pages/homeUser";
import Cart from "./user/pages/cart";
import PlaceOrders from "./user/pages/PlaceOrders";
import Payment from "./user/pages/Payment";
import OrdersPage from "./user/pages/orders";
import NavBar from "./components/user/NavBar";
import HomeAdmin from "./admin/pages/homeAdmin";
import AddProducts from "./admin/pages/AddProducts";
import AllProducts from "./admin/pages/AllProducts";
import AllUsers from "./admin/pages/AllUsers";
import AllOrders from "./admin/pages/AllOrders";
import AdminNavbar from "./components/admin/AdminNavbar";
import SignUpPage from "./user/pages/SignUpPage";

function App() {
  const admin = false;
  let routes;
  if (admin) {
    routes = (
      <>
        <AdminNavbar />
        <Routes>
          <Route path="/admin" element={<HomeAdmin />} />
          <Route path="/admin/add_products" element={<AddProducts />} />
          <Route path="/admin/all_products" element={<AllProducts />} />
          <Route path="/admin/all_users" element={<AllUsers />} />
          <Route path="/admin/all_orders" element={<AllOrders />} />
          <Route path="*" element={<Navigate to="/admin" replace />} />
        </Routes>
      </>
    );
  } else {
    routes = (
      <>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/orders" element={<OrdersPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/proceed_to_payment" element={<PlaceOrders />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </>
    );
  }

  return <div className="w-full min-h-screen">
    {routes}
  </div>;
}

export default App;
