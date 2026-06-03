import { BiMenu } from "react-icons/bi";
import Container from "./Container";

import LogoRAC from "../assets/logo.png";

export default function Navbar() {
  return (
    <div className=" py-5">
      <Container>
        <div className=" flex justify-between items-center w-full md:px-8">
          <img className=" w-32 md:w-40" src={LogoRAC} alt="navbar-logo" />

          <div className=" hidden md:flex gap-14 text-lg">
            <button className=" cursor-pointer">Our Expert</button>
            <button className=" cursor-pointer">Our Services</button>
            <button className=" cursor-pointer">Our Clients</button>
            <div className=" hidden md:block">
              <button className=" cursor-pointer bg-red-500 py-2 px-4 rounded-md text-white font-semibold">
                Contact Us
              </button>
            </div>
          </div>

          <div className=" md:hidden block">
            <button className=" bg-red-500 p-1 rounded-lg text-white">
              <BiMenu size={30} />
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
}
