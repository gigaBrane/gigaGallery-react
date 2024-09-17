import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-900 p-4">
      <div className="container mx-auto text-center">
        <Link to="/" className="text-white text-4xl font-bold hover:underline">
          GigaGallery
        </Link>
      </div>
    </header>
  );
};

export default Header;
