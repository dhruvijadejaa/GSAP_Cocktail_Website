import React from "react";
import { navLinks } from "../../constants/index";

const NavBar = () => {
  return (
    <nav className="w-full h-9 text-red-500 bg-white">
      <div className="flex-center ">
          <a className="flex gap-2 items-center"href="#home">
            <img src="/images/logo.png" alt="" />
            <p >Velvet Pour</p>
          </a>
        

        <div >
          <ul className="flex gap-7">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
