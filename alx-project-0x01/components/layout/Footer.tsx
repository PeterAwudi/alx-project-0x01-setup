import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-200 text-gray-600 py-4">
      <div className="container mx-auto px-4">
        <p className="text-sm text-center">
          &copy; 2023 Daily Contents. All rights reserved.
        </p>
        <ul className="flex justify-center mt-2">
          <li className="mr-4">
            <a href="#" className="text-gray-600 hover:text-gray-800">
              About
            </a>
          </li>
          <li className="mr-4">
            <a href="#" className="text-gray-600 hover:text-gray-800">
              Contact
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              Terms
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;

