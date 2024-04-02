import React, { useContext } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import Login from "../../Login";
import { CartContext } from '../../../Context/cartContext';

const Header = () => {
  const navItems = [
    { key: 1, name: "Home", link: "/" },
    { key: 2, name: "Gallery", link: "/gallery" }
  ]

  const { state: {quantity, products, total} = {}, setOpen, open } = useContext(CartContext);

  return (
    <header className="z-[999] text-black fixed flex top-0 left-0 w-full h-14 bg-white p-1 border-b-2">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-black text-3xl font-bold">Furnish Fantasy</h1>
        <nav className="text-xl font-semibold flex space-x-4 items-center">
          <ul className="flex space-x-4">
            {
              navItems.map(item => (
                <li key={item.key} className="nav-item">
                  <a href={item.link}>{item.name}</a>
                </li>
              ))
            }
            <li className="nav-item">
              <Login />
            </li>
            <li className="nav-item relative" onClick={() => setOpen(prevState => !prevState)}>
              <FaShoppingCart size={24} />
              {quantity > 0 && (
                <span className="bg-blue-500 text-white text-sm rounded-full w-5 h-5 flex items-center justify-center absolute -top-1 -right-3">
                  {quantity}
                </span>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
