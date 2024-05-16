'use client'
import React from "react";
import { useState } from 'react';
import { FaReact, FaCss3 } from "react-icons/fa6";
import { TbBrandNextjs } from "react-icons/tb";
import { SiTypescript, SiTailwindcss, SiHtml5, SiJavascript } from "react-icons/si";
import { FaExternalLinkAlt } from "react-icons/fa";

interface IProyects {
    className?: string;
    id?: string;
}

const ProyectsComponent = (props: IProyects) => {
    const ProyectList = [
        {
            key: 1,
            img: '/images/proyect-1.png',
            name: 'talento-24',
            description: `
            Mi primer trabajo real! Talent-24 Especializado en reclutamiento en tecnologia, industria, atencion al
            cliente y ventas.`,
            tecnologies: [<TbBrandNextjs />, <FaReact />, <SiTypescript />, <SiTailwindcss />, <SiHtml5 />],
            url: 'https://talento24.com/'
        },
        {
            key: 2,
            img: '/images/proyect-2.png',
            name: '25-5-clock',
            description: `
            Proyecto personal desarrollado con Vite para el certificado de Frontend Development Libraries de
            FreeCodeCamp. Gestor de estudio.`,
            tecnologies: [<SiTypescript />, <SiJavascript />, <SiHtml5 />, <FaCss3 />],
            url: 'https://kang-25-5-clock.netlify.app/'
        },
        {
            key: 3,
            img: '/images/proyect-3.png',
            name: 'drum-machine',
            description: `
            Desarrollada con Vite para el certificado en Frontend Development Libraries
            de FreeCodeCamp. Genera tu propia musica.
            `,
            tecnologies: [<SiTypescript />, <SiJavascript />, <SiHtml5 />, <FaCss3 />],
            url: 'https://fcc-drum-machine-alfonso-kang.netlify.app/'
        },
        {
            key: 4,
            img: '/images/proyect-4.png',
            name: 'random-quote-machine',
            description: `
            Desarrollado con Vite. Certificacion en Frontend Development de FreeCodeCamp. Crea citas aleatorias y compartelas en Twitter.
            `,
            tecnologies: [<SiJavascript />, <SiHtml5 />, <FaCss3 />],
            url: 'https://loquacious-cactus-70397f.netlify.app/'
        },
        {
            key: 5,
            img: '/images/proyect-5.png',
            name: 'markdown-previewr',
            description: `
            Para el certificado en Frontend Development Libraries de
            FreeCodeCamp. Permite visualizar y editar texto en Markdown.
            `,
            tecnologies: [<SiTypescript />, <SiJavascript />, <SiHtml5 />, <FaCss3 />],
            url: 'https://aks-markdown-previewer.netlify.app/'
        },
        {
            key: 6,
            img: '/images/proyect-6.png',
            name: 'ios-calculator',
            description: `
            Desarrollada con Vite para el certificado en Frontend Development Libraries de FreeCodeCamp. Inspirado en la
            funcionalidad de iOS.`,
            tecnologies: [<SiTypescript />, <SiJavascript />, <SiHtml5 />, <FaCss3 />],
            url: 'https://calm-pie-a578a0.netlify.app/'
        },
        {
            key: 7,
            img: '/images/proyect-7.png',
            name: 'shoping-cart',
            description: `
            Proyecto personal responsivo. Utiliza Vanilla JS para comprender la logica de
            manipulacion del DOM
            `,
            tecnologies: [<SiJavascript />, <SiHtml5 />],
            url: 'https://shoping-cart-alfonso.netlify.app/'
        },
        {
            key: 8,
            img: '/images/proyect-8.png',
            name: 'responsive-page',
            description: `Mi Primera Web Responsiva para la certificacion en
            Responsive Web Design de FreeCodeCamp.`,
            tecnologies: [<SiHtml5 />, <FaCss3 />],
            url: 'https://responsive-page-alfonso.netlify.app/'
        },
    ]

    const [clickedIndex, setClickedIndex] = useState<number | null>(null);

    const handleClick = (index: number) => {
      setClickedIndex(index === clickedIndex ? null : index);
    };


    return (
        <div id="Proyects" className="flex justify-center items-center flex-wrap gap-y-16 gap-x-12 retalive py-[100px] px-4">
            {ProyectList.map((item, index) => (
                <div key={item.key} className={`
                flex relative justify-center items-start
                bg-kang-gray-300 bg-opacity-15 shadow-md 
                w-full sm:w-[350px] h-[350px] rounded-lg
                group cursor-pointer transition
                ${clickedIndex === index ? 'h-[400px]' : ''}`} onClick={() => handleClick(index)}>
                    <div className={`
                    absolute
                    w-[300px] h-[220px] mt-[20px] 
                  bg-kang-gray-900 rounded-xl transition
                  ${clickedIndex === index ? '-translate-y-[100px] scale-75' : ''}
                   `}>
                        <img src={item.img} alt={item.name} className="h-full w-full border-4 border-white rounded-xl" />
                    </div>
                    <div className="relative w-full h-full overflow-hidden">
                        <div className={`
                        flex flex-col
                        items-center absolute w-full
                        py-0 px-8 top-[298px]
                        transition
                        ${clickedIndex === index ? ' -translate-y-[165px]': ''} 
                        `}>
                            <h1 className=" font-kang-invasion text-blue-600 text-2xl mb-4 text-nowrap">{item.name}</h1>
                            <p className=" font-kang-pixels text-2xl text-white">{item.description}</p>
                            <div className="flex text-white text-xl flex-row overflow-hidden gap-x-5 py-2 my-2">
                                {item.tecnologies}
                            </div>
                            <a href={item.url} target="_blank" className="inline-flex font-medium items-center justify-around border-2 border-blue-600 py-1 px-2 text-blue-600 hover:bg-blue-600 rounded-xl hover:text-white">
                                <p className=' font-kang-invasion text-md mr-2'>Ver mas</p> <FaExternalLinkAlt />
                            </a>
                        </div>
                    </div>

                </div>
            ))}

        </div>
    )
}

export default ProyectsComponent;