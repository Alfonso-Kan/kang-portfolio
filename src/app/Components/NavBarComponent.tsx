'use client'
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAstronaut, faSchool, faBriefcase, faLaptop, faShareNodes } from '@fortawesome/free-solid-svg-icons';
import { MdWbSunny, MdDarkMode } from "react-icons/md";

interface INavBarComponentProps {
    className?: string
}

const NavBarComponent = (props: INavBarComponentProps) => {
    const navList = [
        { name: 'Perfil', to: '#Profile', icon: faUserAstronaut, dis: 'translate-x-0' },
        { name: 'Formacion', to: '#Formation', icon: faSchool, dis: 'translate-x-16' },
        { name: 'Historial', to: '#History', icon: faBriefcase, dis: 'translate-x-32' },
        { name: 'Proyectos', to: '#Proyects', icon: faLaptop, dis: 'translate-x-48' },
        { name: 'Contacto', to: '#Contact', icon: faShareNodes, dis: 'translate-x-64' },
    ];
    const [active, setActive] = useState(0);
    const [isDark, setIsDark] = useState(true);

    const toggleIcon = () => {
        setIsDark((prevState) => !prevState);
    }

   const handleClick = (event: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    event.preventDefault();
    setTimeout(() => {
        const section = document.querySelector(target);
        if(section) {
            section.scrollIntoView({ behavior: 'smooth'})
        }
    }, 650);
   };

    return (
        <nav className={`${props.className} flex items-center justify-center md:justify-between relative rounded-xl`}>
            {/* TITLE PAGE */}
            <div className="hidden md:flex mx-7">
                <h4 className="text-white text-4xl font-kang-cracked hover:font-bold">
                    KANG<span className="text-kang-red-900">DEV</span>
                </h4>
            </div>
            {/* NAV LINKS */}
            <div className='bg-white w-full md:w-fit flex justify-center max-h-[4.4rem] px-3 sm:px-6 rounded-xl'>
                <ul className='flex relative'>
                    <span
                        className={`bg-kang-red-900 duration-500 ${navList[active].dis} border-4 border-kang-gray-900 h-16 w-16 absolute
                -top-5 rounded-full`}
                    >
                        <span
                            className="w-3.5 h-3.5 bg-transparent absolute top-4 -left-[18px] 
                    rounded-tr-[11px] shadow-myShadow1"
                        ></span>
                        <span
                            className="w-3.5 h-3.5 bg-transparent absolute top-4 -right-[18px] 
                    rounded-tl-[11px] shadow-myShadow2"
                        ></span>
                    </span>
                    {navList.map((nav, i) => (
                        <li key={i} className='w-16'>
                            <a
                            href={nav.to}
                            onClickCapture={(e) => handleClick(e, nav.to)}
                            className='flex flex-col text-center pt-6' onClick={() => setActive(i)}>
                                <span className={`text-xl cursor-pointer duration-500 text-kang-gray-900 ${i === active && "-mt-6 text-white z-10"}`}>
                                    <FontAwesomeIcon icon={nav.icon} />
                                </span>
                                <span className={`${active == i
                                    ?
                                    "translate-y-2 duration-700 opacity-100 text-3xl font-kang-pixels text-kang-gray-900"
                                    : "opacity-0 translate-y-10 text-3xl font-kang-pixels"}`}>
                                    {nav.name}
                                </span>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
            {/* DARK/LIGHT-MODE */}
                <button 
                className='hidden md:flex justify-center items-center text-white text-4xl mx-7'
                onClick={toggleIcon}>
                {isDark ? <MdWbSunny /> : <MdDarkMode />}
                </button>
        </nav>
    )
}

export default NavBarComponent;