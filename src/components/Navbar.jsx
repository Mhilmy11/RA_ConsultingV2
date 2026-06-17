import { BiMenu } from "react-icons/bi";
import Container from "./Container";

import LogoRAC from "../assets/logo.png";
import { useState } from "react";

export default function Navbar({
  onClickToExpertRef,
  onClickToServiceRef,
  onClickToClientRef,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const menus = [
    {
      title: "Our Expert",
      ref: onClickToExpertRef,
    },
    {
      title: "Our Services",
      ref: onClickToServiceRef,
    },
    {
      title: "Our Clients",
      ref: onClickToServiceRef,
    },
  ];
  return (
    <div className=" py-5">
      <Container>
        <div className=" flex justify-between items-center w-full md:px-8">
          <img className=" w-32 md:w-40" src={LogoRAC} alt="navbar-logo" />

          <div className=" hidden md:flex gap-14 text-lg">
            {menus.map((menu, i) => (
              <button onClick={menu.ref} key={i} className=" cursor-pointer">
                {menu.title}
              </button>
            ))}

            <div className=" hidden md:block">
              <button className=" cursor-pointer bg-red-500 py-2 px-4 rounded-md text-white font-semibold">
                Contact Us
              </button>
            </div>
          </div>

          <div className=" md:hidden block">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className=" bg-red-500 p-1 rounded-lg text-white"
            >
              <BiMenu size={30} />
            </button>
          </div>
        </div>

        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-96" : "max-h-0"
          }`}
        >
          <ul className="bg-white border-t flex flex-col">
            {menus.map((menu) => (
              <li key={menu}>
                <button
                  className="block px-5 py-2 hover:bg-gray-100"
                  onClick={() => setIsOpen(false)}
                >
                  {menu.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </div>
  );
}
