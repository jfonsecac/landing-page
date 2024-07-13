import React from "react";
import footerLogo from "../../assets/logo.png";
import Dark from '../NavBar/DarkMode'
import Banner from "../../assets/WebSite/footer-pattern.jpg";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";

const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "bottom",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const Menu = [
  {
    title: "inarco",
    link: "https://www.inarco.com.pe/",
  },
  {
    title: "AJCProyectos",
    link: "https://www.ajcproyectos.com/?gad_source=1&gclid=EAIaIQobChMI89u5q-OihwMVoUJIAB1ZtQRHEAMYASAAEgLJ2_D_BwE",
  },
  {
    title: "Construye",
    link: "https://www.vifconstruye.com/?gad_source=1&gclid=EAIaIQobChMI89u5q-OihwMVoUJIAB1ZtQRHEAMYAiAAEgIEifD_BwE",
  },
  {
    title: "Oviedo",
    link: "https://constructoraoviedo.com/",
  },
];

const Footer = () => {
  return (
    <div style={BannerImg} className="text-white">
      <div className="container">
        <div className="grid md:grid-cols-3 pb-30 pt-5">
          {/* company details */}
          <div className="py-8 px-4">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
              <img src={footerLogo} alt="" className="max-w-[50px]" />
              Espinoza&Lazo
            </h1>
            <p>
            Servivicios Generales <br />
            Contratista · Constructora · Contratista de albañilería
            </p>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
            <div>
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Constructoras
                </h1>
                <ul className="flex flex-col gap-3">
                  {Menu.map((link) => (
                    <li
                      className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200"
                      key={link.title}
                    >
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
           
           {/* social links */}

            <div>
              <div className="flex items-center gap-3 mt-6">
                <a href="#">
                  <FaInstagram className="text-3xl" />
                </a>
                <a href="#">
                  <FaFacebook className="text-3xl" />
                </a>
                <a href="#">
                  <FaLinkedin className="text-3xl" />
                </a>
              </div>
              <div className="mt-6">
                <div className="flex items-center gap-3">
                  <FaLocationArrow />
                  <p>Apvis Progreso B-19, Mollendo, Peru, 04416
                  </p>
                </div>
                <div className="flex items-center gap-3 mt-3">
                  <FaMobileAlt />
                  <p>+988169868</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;