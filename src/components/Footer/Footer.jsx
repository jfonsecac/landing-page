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
import { data } from 'autoprefixer';

const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "bottom",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const Menu=[
  {
      id:1,
      name:"Inicio",
      link:"/"
  },
  {
      id:2,
      name:"Nosotros",
      link:"/About",
  },
  {
      id:3,
      name:"Proyectos",
      link:"/ProjectsCurrents",
  },
  {
      id:4,
      name:"Equipo",
      link:"/Equipe",

  },
  {
      id:5,
      name:"Contacto",
      link:"/Contact"
  }

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
                  Enlaces
                </h1>
                <ul className="flex flex-col gap-3">
                  {Menu.map((data) => (
                    <li key={data.id}>
                      <a
                        href={data.link}
                        className="inline-block px-4 hover:text-primary duration-200"
                      >
                        {data.name}
                      </a>
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
                  <p>Apvis Progreso B-19, Mollendo, Peru, 04416</p>
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