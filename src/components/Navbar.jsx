import Container from "./Container";

import LogoRAC from "../assets/logo.png";

export default function Navbar() {
  return (
    <div className=" py-4">
      <Container>
        <div className=" flex">
          <img className=" w-40" src={LogoRAC} alt="navbar-logo" />

          <div>asdasd</div>
        </div>
      </Container>
    </div>
  );
}
