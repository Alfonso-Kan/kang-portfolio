import React from "react";
import { ReactNode } from "react";


interface IToolTip {
    position: string
    content: string
    children: ReactNode
}

export const ToolTip = (props: IToolTip) => (
    <div id='tooltip' className='relative cursor-default group'>
        <div className="mx-2 my-1">{props.children}</div>
        <span className={`
            absolute hidden group-hover:inline-block bg-blue-600 font-kang-invasion text-white text-sm px-2 py-1 whitespace-nowrap rounded opacity-55
            ${props.position === 'top'
            ? "left-1/2 -translate-x-1/2 bottom-[calc(100%+7px)]"
            : ""}
            ${props.position === 'bottom'
            ? "left-1/2 -translate-x-1/2 top-[calc(100%+7px)]"
            : ""}
            `}
            >
                {props.content}
            </span>
        <span className={`
            absolute hidden group-hover:inline-block border-[5.9px] 
            ${props.position === 'top' ?
            "left-1/2 -translate-x-1/2 border-l-transparent border-r-transparent border-b-0 border-t-blue-600 bottom-8 opacity-55"
            : ""}
            ${props.position === 'bottom' ?
            "left-1/2 -translate-x-1/2 border-l-transparent border-r-transparent border-t-0 border-b-blue-600 top-8 opacity-55"
            : ""}
            `}
            ></span>
    </div>
)