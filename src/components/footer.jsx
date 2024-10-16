// src/components/Footer.jsx

import { FaInstagram, FaFacebook, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-yellow-400 text-center p-4">
      <div className="flex justify-center space-x-8 mb-4">
        {/* Instagram Icon */}
        <a
          href="https://www.instagram.com/suhavi_artistry/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-800 hover:text-gray-600"
        >
          <FaInstagram size={30} />
        </a>

        {/* Facebook Icon */}
        <a
          href="https://www.facebook.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-800 hover:text-gray-600"
        >
          <FaFacebook size={30} />
        </a>

        {/* Email Icon */}
        <a
          href="mailto:suhaviartistry@gmail.com"
          className="text-gray-800 hover:text-gray-600"
        >
          <FaEnvelope size={30} />
        </a>
      </div>
      <p className="text-sm font-cute">Suhavi. All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;
