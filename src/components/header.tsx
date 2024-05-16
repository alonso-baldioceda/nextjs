import React from "react";

export interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header className="bg-gray-600 text-white p-4 flex justify-between items-center">
      <div className="flex items-center">
        <span>
          <img src="/rocket.svg" alt="rocket" width={40} />
        </span>
        <span className="font-bold px-2">
          <h1>{title}</h1>
        </span>
      </div>
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
    </header>
  );
};

export default Header;
