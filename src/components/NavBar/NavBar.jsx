import React from 'react';
import logo from "../../assets/logo.png"
import { IoMdSearch } from "react-icons/io";
import { FaCaretDown } from 'react-icons/fa';
import DarkMode from './DarkMode';
import { data } from 'autoprefixer';



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

const DropdownLinks=[
    {
        id:1,
        name:"Resgistrate",
        link:"/Form",
    },
    {
        id:2,
        name:"Convocatoria Laboral",
        link:"/#",

    },
    {
        id:3,
        name:"Seguimiento",
        link:"/#"
    }
    
];


const NavBar = () => {
   
  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      {/*upper NavBar */}
      <div className="bg-primary/80 py-2">
        <div className="container flex justify-between items-center">
          <div>
            <a
              href="#"
              className="font-bold text-3xl text-white sm:text-3xl flex gap-2"
            >
              <img src={logo} alt="logo" className="w-10" />
              Espinoza&Lazo
            </a>
          </div>
          {/* Search bar*/}
          <div className="flex justify-between items-center gap-4">
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="search"
                className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border-gray-300 px-2 py-1 focus:outline-none focus:border-primary dark:border-gray-500 dark:bg-gray-800"
              />
              <IoMdSearch className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
            </div>
          </div>
          {/*DarkMode Switch**/}
          <div>
            <DarkMode />
          </div>
        </div>
      </div>
      {/*lower NavBar sanguche*/}
      <div className="sm:flex md:hidden lg:hidden">
        <nav className="flex items-center justify-between flex-wrap bg-white-500 p-6">
        
          <div className="">
            <button
              id="boton"
              className="flex items-center px-3 py-2 border rounded text-primary border-primary hover:text-white hover:border-white"
            >
              <svg
                className="fill-current h-3 w-3"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
          <div
            id="menu"
            className="w-full block flex-grow lg:flex lg:items-center lg:w-auto"
          >
            <div className="text-sm lg:flex-grow">
              <a
                href="#responsive-header"
                className="block mt-4 lg:inline-block lg:mt-0 text-primary hover:text-white mr-4"
              >
                Nosotros
              </a>
              <a
                href="#responsive-header"
                className="block mt-4 lg:inline-block lg:mt-0 text-primary hover:text-white mr-4"
              >
                Proyectos
              </a>
              <a
                href="#responsive-header"
                className="block mt-4 lg:inline-block lg:mt-0 text-primary hover:text-white"
              >
                Equipo
              </a>
            </div>
            
          </div>
        </nav>
      </div>


      {/* menu normal */}
      <div className="flex justify-center">
        <ul className="sm:flex hidden items-center gap-4">
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
          {/*simple dropdown and links*/}
          <li className="group relative cursor-pointer">
            <a href="#" className="flex items-center gap-[2px] py-2">
              Trabaja con Nosotros
              <span>
                <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
              </span>
            </a>
            <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white p-2 text-black shadow-md">
              <ul>
                {DropdownLinks.map((data) => (
                  <li key={data.id}>
                    <a
                      href={data.link}
                      className="inline-block w-full rounded-md p-2 hover:bg-primary/20"
                    >
                      {data.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar
