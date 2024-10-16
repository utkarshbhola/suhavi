import { useState } from "react";
import PropTypes from "prop-types"; // Import PropTypes

function AdminDashboard({ addProduct }) {
  const [product, setProduct] = useState({
    title: "",
    price: "",
    image: "",
    category: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addProduct(product); // Call addProduct from props
    setProduct({ title: "", price: "", image: "", category: "" });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h2 className="text-2xl font-bold mb-6">
        Admin Dashboard - Add New Product
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-lg">Product Title</label>
          <input
            type="text"
            name="title"
            value={product.title}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>

        <div>
          <label className="block text-lg">Product Price</label>
          <input
            type="number"
            name="price"
            value={product.price}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>

        <div>
          <label className="block text-lg">Product Image URL</label>
          <input
            type="text"
            name="image"
            value={product.image}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div>
          <label className="block text-lg">Product Category</label>
          <select
            name="category"
            value={product.category}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          >
            <option value="" disabled>
              Select a category
            </option>
            <option value="Tea Light">Tea Light Candles</option>
            <option value="Votive">Votive Candles</option>
            <option value="Scented">Scented Candles</option>
            <option value="Customized">Customized Candles</option>
          </select>
        </div>
        <button
          type="submit"
          className="bg-yellow-500 text-white px-4 py-2 rounded"
        >
          Add Product
        </button>
      </form>
    </div>
  );
}

// PropTypes validation
AdminDashboard.propTypes = {
  addProduct: PropTypes.func.isRequired, // Ensure addProduct is a required function
};

export default AdminDashboard;
