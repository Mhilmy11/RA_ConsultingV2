import { BiMapPin } from "react-icons/bi";
import { BsInstagram, BsLinkedin, BsWhatsapp } from "react-icons/bs";
import Container from "./Container";

import FooterLogo from "../assets/logo.png";

export default function Footer() {
  return (
    <div className=" bg-red-700 text-white py-4 md:py-8">
      <Container>
        <div className=" md:px-5">
          <div className=" grid grid-cols-1 md:grid-cols-2">
            <div className=" block md:hidden place-items-center">
              <img className=" w-[380px]" src={FooterLogo} alt="footer-logo" />
            </div>
            <div className=" hidden md:block">
              <img className=" w-[300px]" src={FooterLogo} alt="footer-logo" />
            </div>

            <div>
              <div className=" md:grid hidden grid-cols-2 gap-y-4">
                <div>
                  <p className=" font-semibold">Phone</p>
                  <p className=" text-sm">+62 858-8838-8439</p>
                </div>
                <div>
                  <p className=" font-semibold">Email</p>
                  <p className=" text-sm">info@rac.co.id</p>
                </div>
                <div className=" col-span-2">
                  <p className=" font-semibold">Address</p>
                  <p className=" text-sm">
                    WeWork 26th Floor Office 26-103 Revenue Tower - District 8
                    SCBD Jl. Jendral Sudirman Kav 52-53 Kebayoran Baru - Jakarta
                    Selatan 12190
                  </p>
                </div>
              </div>

              <div className=" flex gap-3 items-center justify-center md:justify-start pt-5 md:pt-10">
                <button
                  className=" cursor-pointer"
                  onClick={() =>
                    window.open(
                      "https://id.linkedin.com/company/rahmadadigunakonsulting",
                      "_blank",
                    )
                  }
                >
                  <BsLinkedin size={25} />
                </button>
                <button
                  className=" cursor-pointer"
                  onClick={() =>
                    window.open(
                      "https://www.instagram.com/raconsulting_official/",
                      "_blank",
                    )
                  }
                >
                  <BsInstagram size={25} />
                </button>
                <button
                  className=" cursor-pointer"
                  onClick={() =>
                    window.open(
                      "https://maps.google.com?q=Kantor%20RA%20Consulting,%20WeWork%20Revenue%20Tower,%2026th%20Floor,%2026-103,%20Kec.%20Kby.%20Baru,%20Kota%20Jakarta%20Selatan,%20Daerah%20Khusus%20Ibukota%20Jakarta%2012190&ftid=0x0:0x36d93130e686896e&entry=gps&lucs=,94242508,94224825,94227247,94227248,47071704,47069508,94218641,94203019,47084304,94208458,94208447&g_st=com.google.maps.preview.copy",
                      "_blank",
                    )
                  }
                  className=" md:hidden inline-block"
                >
                  <BiMapPin size={25} />
                </button>
                <button
                  className=" cursor-pointer"
                  onClick={() =>
                    window.open("https://wa.me/6285888388439", "_blank")
                  }
                >
                  <BsWhatsapp size={25} />
                </button>
              </div>

              <div className=" text-sm mt-5 italic text-center">
                © {new Date().getFullYear()} All rights reserved by RA
                Consulting
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
