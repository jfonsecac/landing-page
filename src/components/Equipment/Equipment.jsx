import React from "react";
import Slider from "react-slick";

const EquipmentsData = [
  {
    id: 1,
    name: "Administración",
    text: "Es la que se encarga de planificar, organizar, controlar y coordinar un proyecto, teniendo como objetivo alcanzar las metas establecidas para su ejecución.",
    img: "https://cdn-icons-png.freepik.com/512/4327/4327428.png",
  },
  {
    id: 2,
    name: "Operaciones",
    text: "Ejecución de las unidades de obra con un COSTE que obtiene a medida que produce y VENDE los productos que produce a un precio prefijado, antes de la ejecución de obra.",
    img: "https://cdn-icons-png.freepik.com/512/4327/4327428.png",
  },
  {
    id: 3,
    name: "Supervisiones",
    text: "Es la actividad de planear, prevenir, vigilar y controlar la coordinación de todas las actividades de tal manera que se realicen en forma satisfactoria. ",
    img: "https://cdn-icons-png.freepik.com/512/4327/4327428.png",
  },
 
];

const Equipment = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-5 my-2 bg-gray-100  dark:bg-gray-950 dark:text-white">
      <div className="container">
        {/* header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Equipo de Trabajo
          </h1>
        </div>

        {/* Testimonial cards */}
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {EquipmentsData.map((data) => (
              <div className="my-6">
                <div
                  key={data.id}
                  className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-dark bg-primary/10 relative"
                >
                  <div className="mb-4">
                    <img
                      src={data.img}
                      alt=""
                      className="rounded-full w-20 h-20"
                    />
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <div className="space-y-3">
                      <p className="text-xs text-gray-500">{data.text}</p>
                      <h1 className="text-xl font-bold">
                        {data.name}
                      </h1>
                    </div>
                  </div>
                  <p className="text-primary/20 text-9xl font-serif absolute top-0 right-0">
                    ,,
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Equipment;