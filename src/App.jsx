import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Posts from "./pages/Posts";
import DashboardLayout from "./pages/dashboard/layout/DashboardLayout";
import HomeDash from "./pages/dashboard/HomeDash";
import PostsDash from "./pages/dashboard/PostsDash";
import ProductsDash from "./pages/dashboard/ProductsDash";
import UsersDash from "./pages/dashboard/UsersDash";
import Protectedroute from "./components/Protectedroute";

export const user = "Andrew";
function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/dashboard"
          element={
            <Protectedroute user={user}>
              <DashboardLayout />
            </Protectedroute>
          }
        >
          <Route index element={<HomeDash />} />
          <Route path="users" element={<UsersDash />} />
          <Route path="posts" element={<PostsDash />} />
          <Route path="products" element={<ProductsDash />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
