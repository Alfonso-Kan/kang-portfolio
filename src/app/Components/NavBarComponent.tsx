'use client'
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAstronaut, faSchool, faBriefcase, faLaptop, faShareNodes } from '@fortawesome/free-solid-svg-icons';


interface INavBarComponentProps {
    className?: string
}

const NavBarComponent = (props: INavBarComponentProps) => {
    const navList = [
        { name: 'Perfil', to: '#', icon: faUserAstronaut, dis: 'translate-x-0' },
        { name: 'Formacion', to: '#', icon: faSchool, dis: 'translate-x-16' },
        { name: 'Historial', to: '#', icon: faBriefcase, dis: 'translate-x-32' },
        { name: 'Proyectos', to: '#', icon: faLaptop, dis: 'translate-x-48' },
        { name: 'Contacto', to: '#', icon: faShareNodes, dis: 'translate-x-64' },
    ];
    const [active, setActive] = useState(0);

    return (
        <nav className={`${props.className} bg-kang-ivory-900 flex items-center justify-center md:justify-between shadow relative rounded-xl`}>
            <div className="hidden md:flex mx-7">
                <h4 className="text-kang-gray-900 text-4xl font-kang-3dpixels hover:font-bold">
                    Kang<span className="text-kang-red-900">Dev</span>
                </h4>
            </div>
            <div className='bg-kang-ivory-900 max-h-[4.4rem] px-3 sm:px-6 rounded-xl'>
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
                            <a href="#" className='flex flex-col text-center pt-6' onClick={() => setActive(i)}>
                                <span className={`text-xl cursor-pointer duration-500 ${i === active && "-mt-6 text-kang-ivory-900 z-10"}`}>
                                    <FontAwesomeIcon icon={nav.icon} />
                                </span>
                                <span className={`${active == i
                                    ?
                                    "translate-y-2 duration-700 opacity-100 text-3xl font-kang-pixels"
                                    : "opacity-0 translate-y-10 text-3xl font-kang-pixels"}`}>
                                    {nav.name}
                                </span>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}

export default NavBarComponent;