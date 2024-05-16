import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-600 text-white p-4 flex justify-center items-center">
      <nav className="flex">
        <ul className="flex space-x-4">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
