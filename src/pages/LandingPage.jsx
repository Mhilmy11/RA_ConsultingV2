import { useState, useEffect } from "react";

import Container from "../components/Container.jsx";

import Slide2 from "../assets/hero_assets/Slide-2.jpg";
import Slide4 from "../assets/hero_assets/Slide-4.jpg";
import Slide5 from "../assets/hero_assets/Slide-5.jpg";
import Slide6 from "../assets/hero_assets/Slide-6.jpg";

import Team1 from "../assets/teams_assets/team01.png";
import Team2 from "../assets/teams_assets/team02.png";
import Team3 from "../assets/teams_assets/team03.png";

import Client1 from "../assets/clients_assets/knu.jpg";
import Client2 from "../assets/clients_assets/kopsurindo.png";
import Client3 from "../assets/clients_assets/lds-group-black.png";
import Client4 from "../assets/clients_assets/logo-minori-300x136.webp";
import Client5 from "../assets/clients_assets/nala.png";
import Client6 from "../assets/clients_assets/pialite.jpg";
import Client7 from "../assets/clients_assets/polyplex-logo.jpg";
import Client8 from "../assets/clients_assets/pt-anak-sehat-idaman-hati.png";
import Client9 from "../assets/clients_assets/pt-cataler-indonesia.png";
import Client10 from "../assets/clients_assets/pt-hybrid-power.png";
import Client11 from "../assets/clients_assets/pt-hyundai-elevator-indonesia.jpeg";
import Client12 from "../assets/clients_assets/pt-nikawa-textile-industry.png";
import Client13 from "../assets/clients_assets/pt-penilai-harga-efek-indonesia-(PHEI).jpeg";
import Client14 from "../assets/clients_assets/pt-sumbawa-timur.jpeg";
import Client15 from "../assets/clients_assets/pt-vale-indonesia.png";
import Client16 from "../assets/clients_assets/tokopedia-pt-mastrada.png";

import About1 from "../assets/AboutUs_Image.jpg";

import {
  FaSearchDollar,
  FaGavel,
  FaCheckCircle,
  FaFileInvoiceDollar,
  FaComments,
} from "react-icons/fa";

import {
  HiLightBulb,
  HiOutlineEye,
  HiOutlineFlag,
  HiOutlineDocumentText,
} from "react-icons/hi";

const slides = [
  {
    title: "Slide-2",
    imageUrl: Slide2,
  },
  {
    title: "Slide-3",
    imageUrl: Slide6,
  },
  {
    title: "Slide-4",
    imageUrl: Slide5,
  },
  {
    title: "Slide-6",
    imageUrl: Slide4,
  },
];

const teams = [
  {
    name: "Rahmad Adam",
    role: "Managing Partner",
    image: Team1,
  },
  {
    name: "Rheza Siswa Wiguna",
    role: "Tax Partner",
    image: Team2,
  },
  {
    name: "Tami Nisita Rahmani",
    role: "Assistant Tax Manager",
    image: Team3,
  },
];

const services = [
  {
    serviceName: "Tax Consulting",
    icon: <FaComments size={35} />,
    desc: "Professional tax advice tailored to your business needs, covering planning, audits, compliance, restructuring, and various tax-related matters.",
  },
  {
    serviceName: "Tax Planning and Preparation",
    icon: <FaFileInvoiceDollar size={35} />,
    desc: "Strategic tax planning and accurate preparation services to optimize financial positions, reduce risks, and support long-term business goals.",
  },
  {
    serviceName: "Tax Compliance",
    icon: <FaCheckCircle size={35} />,
    desc: "Comprehensive tax compliance support including filing, payments, record-keeping, and regulatory updates to keep your business fully compliant.",
  },
  {
    serviceName: "Tax Diagnostic Review",
    icon: <FaSearchDollar size={35} />,
    desc: "Detailed review of tax practices to identify risks, ensure compliance, and discover opportunities for improving your company's tax position.",
  },
  {
    serviceName: "Tax Litigation Services",
    icon: <FaGavel size={35} />,
    desc: "Professional assistance in handling tax disputes, audits, negotiations, and legal proceedings to protect your business interests effectively.",
  },
  {
    serviceName: "Tax Objection and Appeal",
    icon: <HiOutlineDocumentText size={40} />,
    desc: "Expert support for tax objections and appeals, including assessment reviews, legal documentation, and representation throughout the resolution process.",
  },
];

const clients = [
  {
    image: Client2,
    alt: "kopsurindo-image-client",
  },
  {
    image: Client6,
    alt: "pialite-image-client",
  },
  {
    image: Client7,
    alt: "polyplex-image-client",
  },
  {
    image: Client8,
    alt: "anak-sehat-idaman-hati-image-client",
  },
  {
    image: Client9,
    alt: "cataler-indonesia-image-client",
  },
  {
    image: Client10,
    alt: "hybrid-power-image-client",
  },
  {
    image: Client11,
    alt: "hyundai-elevator-indonesia-image-client",
  },
  {
    image: Client5,
    alt: "nala-image-client",
  },
  {
    image: Client14,
    alt: "sumbawa-timur-image-client",
  },
  {
    image: Client3,
    alt: "lds-group-image-client",
  },
  {
    image: Client4,
    alt: "minori-image-client",
  },
  {
    image: Client12,
    alt: "nikawa-textile-industry-image-client",
  },
  {
    image: Client13,
    alt: "penilai-harga-efek-indonesia-image-client",
  },
  {
    image: Client15,
    alt: "vale-indonesia-image-client",
  },
  {
    image: Client16,
    alt: "tokopedia-mastrada-image-client",
  },
  {
    image: Client1,
    alt: "knu-image-client",
  },
];

export default function LandingPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === slides.length - 1 ? 0 : prevSlide + 1,
      );
    }, 3000);

    return () => clearInterval(slideInterval);
  }, []);
  return (
    <>
      <div className=" md:mx-auto md:max-w-[1440px]">
        <div className="overflow-hidden md:rounded-2xl">
          <div
            className="flex transition-transform duration-1000 ease-in-out"
            style={{
              transform: `translateX(-${currentSlide * 100}%)`,
            }}
          >
            {slides.map((slide, i) => (
              <div key={i} className="min-w-full">
                <img
                  className="w-full h-auto max-h-56 md:max-h-[430px] object-cover md:object-top md:rounded-2xl"
                  src={slide.imageUrl}
                  alt={slide.title}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className=" bg-slate-100 my-16 md:my-24 py-8">
        <div className=" max-w-6xl mx-auto px-5">
          <div className=" grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className=" flex justify-center">
              <img
                className=" w-[350px] md:w-[500px] rounded-tl-[100px] rounded-br-[100px] md:rounded-tl-[200px] md:rounded-br-[200px]"
                src={About1}
                alt="about-image-1"
              />
            </div>

            <div>
              <div className=" mb-5">
                <p className=" text-2xl md:text-4xl font-bold mb-1">About Us</p>
                <div className=" bg-red-500 h-1 w-[150px]"></div>
              </div>

              <div className=" text-base md:text-lg">
                <p>
                  RA Consulting, we specialize in providing top-tier Tax and
                  Accounting consultancy services tailored to meet the diverse
                  needs of our clients. Located at Revenue Tower - District 8
                  SCBD, 26th Floor, Jl. Jend. Sudirman Kav. 52-53, Kebayoran
                  Baru, Jakarta Selatan 12190, our central location enables us
                  to serve clients across Jakarta and beyond.
                </p>

                <p>
                  Ready to experience the difference of working with true tax
                  and accounting experts? Reach out to us today at
                  info@rac.co.id to schedule a consultation and discover how RA
                  Consulting can help you achieve your financial goals with
                  confidence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" my-16 md:my-24">
        <Container>
          <div className=" mb-5">
            <p className=" text-2xl md:text-4xl font-bold">We Provide Best</p>
          </div>

          <div className=" w-full grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto justify-items-center">
            <div className="h-full max-w-2xs rounded-tl-[80px] rounded-br-[80px] bg-white p-8 shadow-lg hover:shadow-2xl transition duration-300 border border-slate-100 flex flex-col">
              <HiLightBulb className="text-5xl text-red-500 mb-6" />

              <h3 className="text-2xl font-bold mb-4 text-gray-800">Motto</h3>

              <p className="text-gray-500 leading-relaxed">
                Tax Disputes, we are the experts.
              </p>
            </div>

            <div className="h-full max-w-2xs rounded-tl-[80px] rounded-br-[80px] bg-white p-8 shadow-lg hover:shadow-2xl transition duration-300 border border-slate-100 flex flex-col">
              <HiOutlineEye className="text-5xl text-red-500 mb-6" />

              <h3 className="text-2xl font-bold mb-4">Vision</h3>

              <p className="text-gray-500 leading-relaxed">
                We envision ourselves becoming one of the leading tax consulting
                firms in Indonesia.
              </p>
            </div>

            <div className="h-full max-w-2xs rounded-tl-[80px] rounded-br-[80px] bg-white p-8 shadow-lg hover:shadow-2xl transition duration-300 border border-slate-100 flex flex-col">
              <HiOutlineFlag className="text-5xl text-red-500 mb-6" />

              <h3 className="text-2xl font-bold mb-4 text-gray-800">Mission</h3>

              <p className="text-gray-500 leading-relaxed">
                To deliver the best service to clients.
              </p>
            </div>
          </div>
        </Container>
      </div>

      <div className=" bg-slate-100 pt-8 pb-24 my-16 md:my-24">
        <Container>
          <div>
            <div className=" place-items-center mb-10">
              <p className=" text-2xl md:text-4xl font-bold mb-2">Our Expert</p>
              <div className=" bg-red-500 h-1 w-[150px]"></div>
            </div>

            <div className=" grid grid-cols-1 md:grid-cols-3 gap-24 place-items-center">
              {teams.map((team, index) => (
                <div key={index} className="group relative w-full max-w-xs">
                  <div className="overflow-hidden rounded-tl-[60px] rounded-br-[60px] bg-radial-[at_50%_75%] from-white via-gray-600 to-black to-90% shadow-lg">
                    <img
                      src={team.image}
                      alt={team.name}
                      className="h-[420px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="absolute inset-x-0 -bottom-12 flex justify-center px-4">
                    <div className=" w-full max-w-[220px] rounded-2xl bg-white px-4 py-2 text-center shadow-xl ring-1 ring-slate-100">
                      <h3 className="text-lg font-bold text-slate-800">
                        {team.name}
                      </h3>

                      <p className="mt-1 text-sm text-red-500">{team.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>

      <div className=" my-16 md:my-24">
        <Container>
          <div className="mb-10">
            <p className=" text-2xl md:text-4xl font-bold mb-2">Our Services</p>
            <div className=" bg-red-500 h-1 w-[190px]"></div>
          </div>

          <div className=" mx-auto max-w-6xl px-10 md:px-0">
            <div className=" grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, i) => (
                <div
                  key={i}
                  className=" bg-slate-100 border hover:border-2 border-slate-200 hover:border-red-600 shadow-lg hover:shadow-xl transition duration-300 py-5 px-10 rounded-tr-[50px] rounded-bl-[50px]"
                >
                  <div className=" flex flex-col gap-6">
                    <div className=" bg-red-600 text-white w-fit p-4 rounded-full">
                      {service.icon}
                    </div>

                    <p className=" font-semibold text-2xl">
                      {service.serviceName}
                    </p>

                    <p className=" text-sm">{service.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>

      <div className=" bg-slate-100 py-8 my-16 md:my-24">
        <Container>
          <div className=" place-items-center mb-10">
            <p className=" text-2xl md:text-4xl font-semibold mb-2">
              Some of our valuable clients
            </p>
            <div className=" bg-red-500 h-1 w-[250px] md:w-[350px]"></div>
          </div>

          <div className=" grid grid-cols-2 md:grid-cols-8 place-items-center gap-y-10 md:gap-y-5">
            {clients.map((client, i) => (
              <div key={i}>
                <img className=" w-32" src={client.image} alt={client.alt} />
              </div>
            ))}
          </div>
        </Container>
      </div>
    </>
  );
}
