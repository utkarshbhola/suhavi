import { useState } from "react";
import PropTypes from "prop-types"; // Import PropTypes

const Login = ({ onLogin }) => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace 'your-password' with the actual password
    if (password === "Hanut") {
      onLogin(); // Call the onLogin function passed as prop
    } else {
      setError("Incorrect password, please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow-md w-80"
      >
        <h2 className="text-2xl font-bold mb-4">Admin Login</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <div>
          <label className="block text-lg mb-2">Password</label>
          <input
            type="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-yellow-500 text-white px-4 py-2 rounded mt-4"
        >
          Login
        </button>
      </form>
    </div>
  );
};

// Define prop types for the Login component
Login.propTypes = {
  onLogin: PropTypes.func.isRequired, // 'onLogin' is required and should be a function
};

export default Login;
