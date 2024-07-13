import React from "react";
import CarPng from "../../assets/Hero/Equipo.png";


const About = () => {
  return (
    <div className="dark:bg-dark bg-slate-100 sm:min-h-[600px] sm:grid sm:place-items-center dark:bg-gray-950 dark:text-white duration-300">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
          <div>
            <img
              src={CarPng}
              alt=""
              className="sm:scale-125 sm:-translate-x-11 max-h-[300px] drop-shadow-[2px_10px_6px_rgba(0,0,0,0.50)]"
            />
          </div>
          <div>
            <div className="space-y-5 sm:p-16 pb-6 p-5">
              <h1
                // data-aos="fade-up"
                className="text-3xl sm:text-4xl font-bold font-serif"
              >
                Acerca de Nosotros
              </h1>
              <p>
              Nuestra Historia <br />
              Desde sus humildes comienzos en enero de 2005, Espinoza & Lazo, fundada por su propietario, está muy orgulloso del crecimiento que ha experimentado y de la variedad de proyectos que ha emprendido durante este período, lo que ha permitido a la empresa consolidarse firmemente como una empresa seria. colaborador de la industria de contratación de edificios y desarrollo inmobiliario.
              </p>
              <p>
              Nuestra Misión <br />
              Somos una familia comprometida a convertirnos en su contratista preferido. Buscamos la excelencia en todo lo que hacemos a través de dedicación, experiencia y empleados disciplinados que tienen una pasión constante por entregar proyectos de calidad, oportunos y rentables.
              </p>
            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
