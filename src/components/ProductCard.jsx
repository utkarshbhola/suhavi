function ProductCard() {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img
        src="https://via.placeholder.com/150"
        alt="Product"
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold">Product Title</h2>
        <p className="mt-2 text-gray-600">$99.99</p>
        <button className="mt-4 bg-yellow-500 text-white px-4 py-2 rounded">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
