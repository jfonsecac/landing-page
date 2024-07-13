import React from 'react'
import Img1 from "../../assets/Projects/Proyecto1.jpg";
import Img2 from "../../assets/Projects/Proyecto2.jpg";
import Img3 from "../../assets/Projects/Proyecto3.jpg";
import Img4 from "../../assets/Projects/Proyecto4.jpg";
import Img5 from "../../assets/Projects/Proyecto5.jpg";
// import { FaStar } from "react-icons/fa6";


const ProjectsData=[
    {
        id:1,
        img:Img1,
        title:"Proyecto Palmeras",
        // rating: 5.0,
        locate: "Urb. Las Gaviotas - Mejía",
        aosDelay: "100",
    },
    {
        id:2,
        img:Img2,
        title:"Proyecto Puerto Braco",
        // rating: 5.0,
        locate: "Urb. Las Ambarinas - La Punta",
        aosDelay: "200",
    },
    {
        id:3,
        img:Img3,
        title:"Proyecto Azul",
        // rating: 5.0,
        locate: "Urb. La Colmena - Arequipa",
        aosDelay: "300",
    },
    {
        id:4,
        img:Img4,
        title:"Proyecto La Luz",
        // rating: 5.0,
        locate: "Urb. Catarindo - Catarindo",
        aosDelay: "400",
    },
    {
        id:5,
        img:Img5,
        title:"Proyecto Beach",
        // rating: 5.0,
        locate: "Urb. Estibadores - Arequipa",
        aosDelay: "500",
    },
    {
        id:6,
        img:Img1,
        title:"Proyecto Palmeras",
        // rating: 5.0,
        locate: "Urb. Las Gaviotas - Mejía",
        aosDelay: "100",
    },
    {
        id:7,
        img:Img2,
        title:"Proyecto Puerto Braco",
        // rating: 5.0,
        locate: "Urb. Las Ambarinas - La Punta",
        aosDelay: "200",
    },
    {
        id:8,
        img:Img3,
        title:"Proyecto Azul",
        // rating: 5.0,
        locate: "Urb. La Colmena - Arequipa",
        aosDelay: "300",
    },
    {
        id:9,
        img:Img4,
        title:"Proyecto La Luz",
        // rating: 5.0,
        locate: "Urb. Catarindo - Catarindo",
        aosDelay: "400",
    },
    {
        id:10,
        img:Img5,
        title:"Proyecto Beach",
        // rating: 5.0,
        locate: "Urb. Estibadores - Arequipa",
        aosDelay: "500",
    },
];

const ProjectsCurrents = () => {
  return (
    <div className='mt-1 mb-2 p-10 bg-gray-100 dark:bg-gray-950 dark:text-white'>
      <div className='container'>
        {/*header section */}
            <div className='text-center mb-10 max-w-[600px] mx-auto'>
                <p className='text-sm text-primary  dark:bg-gray-950 dark:text-white'>Proyectos para tu vida Familiar</p>
                <h1 className='text-3xl text-primary font-bold  dark:bg-gray-950 dark:text-white'>Proyectos Actuales</h1>
                <p className='text-ms text-gray-400'>
                 Nuestra relación con los clientes inicia con una promesa y dura para toda la vida.
                </p>
            </div>


        {/* body section*/}
        <div>
            <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-3'>
                {/* card section*/}
                {ProjectsData.map((data)=>(
                        <div 
                        
                        
                        key={data.id} className='space-y-3'>
                            <img src={data.img} alt="" 
                            className='h-[220px] w-[250px] object-cover rounded-md'/>
                            <div>
                                <h3 className='font-semibold'>{data.title}</h3>
                                <p className='text-sm text-gray-600'>{data.locate}</p>
                                <div className='flex justify-center gap-1'>
                                    {/* <FaStar className='text-yellow-400' /> */}
                                    <span>{data.rating}</span>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
      </div>

    </div>
  )
}

export default ProjectsCurrents