import PropTypes from "prop-types"; // Import PropTypes

const Popup = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded shadow-lg w-11/12 sm:w-1/3">
        <h2 className="text-2xl font-bold mb-4">Welcome to Suhavi!</h2>
        <p className="mb-4">
          Thank you for visiting our website. Explore our exquisite, handcrafted
          candles!
        </p>
        <button
          onClick={onClose}
          className="bg-yellow-500 text-white px-4 py-2 rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
};

// Define prop types for the Popup component
Popup.propTypes = {
  onClose: PropTypes.func.isRequired, // 'onClose' is required and should be a function
};

export default Popup;
