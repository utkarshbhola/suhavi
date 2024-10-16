import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductCatalog from "./pages/ProductCatalog";
import AdminDashboard from "./pages/AdminDashboard";
import Navbar from "./components/Navbar";
import Popup from "./components/popup";
import Login from "./components/login"; // Import the Login component
import Footer from "./components/footer";
function App() {
  const [showPopup, setShowPopup] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false); // State to manage authentication
  const [products, setProducts] = useState([
    {
      title: "Product 1",
      price: 50,
      image: "https://via.placeholder.com/150",
      category: "Tea Light",
    },
    {
      title: "Product 2",
      price: 100,
      image: "https://via.placeholder.com/150",
      category: "Votive",
    },
  ]);

  const addProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const handleLogin = () => {
    setIsAuthenticated(true); // Set authentication state to true
  };

  return (
    <Router>
      {showPopup && <Popup onClose={closePopup} />}
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductCatalog products={products} />} />
        <Route
          path="/admin"
          element={
            isAuthenticated ? (
              <AdminDashboard addProduct={addProduct} />
            ) : (
              <Login onLogin={handleLogin} /> // Render Login component if not authenticated
            )
          }
        />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
