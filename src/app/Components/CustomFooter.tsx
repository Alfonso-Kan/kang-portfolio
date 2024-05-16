'use client'
import { useRef, useState } from 'react';

interface IFooterButtons {
    children: any
    text: string
    color: string
    href: string
    className?: string
}

export default function FooterButtons(props: IFooterButtons) {
    const [hovered, setHovered] = useState(false);
    const ref = useRef<HTMLSpanElement>(null)

    const hoveredButton = () => {
        setHovered(!hovered);
    }

    return (
        <button
            onMouseEnter={hoveredButton}
            onMouseLeave={hoveredButton}
            className={`
        ${props.className}
        ${props.color || 'bg-black'}
        flex text-4xl p-2 items-center rounded-lg text-white`}>
            {props.children}
            <div
                style={{ width: hovered ? ref.current?.offsetWidth || 0 : 0 }}
                className={`overflow-x-hidden transition-all duration-300 ease-out`}>
                <span ref={ref} className=' text-4xl px-1.5 font-kang-pixels cursor-pointer hover:underline'>
                    <a href={props.href} target='_blank'>{props.text}</a>
                </span>
            </div>
        </button>
    )
}