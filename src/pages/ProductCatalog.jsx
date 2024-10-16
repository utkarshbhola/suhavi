import ProductCard from "../components/ProductCard";
import PropTypes from "prop-types";

function ProductCatalog({ products }) {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-6 text-center font-cute">
        Product Catalog
      </h1>
      <p className="text-2xl font-semibold mb-6 text-center font-cute">
        Suhavi Artistry is your one-stop-shop for exquisite, handcrafted candles
        that will illuminate your homes and hearts. Our candles are meticulously
        crafted with love, using high-quality soy wax and essential oils,
        ensuring a mesmerizing ambiance and soothing fragrance.
      </p>

      <h2 className="text-2xl font-bold mb-6 font-cute">Tea Lights</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            title={product.title}
            price={product.price}
            image={product.image}
          />
        ))}
      </div>
      <h2 className="text-2xl font-bold mb-6 font-cute">Tea Lights</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            title={product.title}
            price={product.price}
            image={product.image}
          />
        ))}
      </div>
      <h2 className="text-2xl font-bold mb-6 font-cute">Tea Lights</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            title={product.title}
            price={product.price}
            image={product.image}
          />
        ))}
      </div>
      <h2 className="text-2xl font-bold mb-6 font-cute">Tea Lights</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            title={product.title}
            price={product.price}
            image={product.image}
          />
        ))}
      </div>
    </div>
  );
}

// PropTypes validation
ProductCatalog.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ProductCatalog;
