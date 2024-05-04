import React from 'react'
import { BiSolidLeftArrow } from "react-icons/bi";

type TDirection = 'left' | 'right'

interface ICustomArrowsProps {
  onClick?: () => void
  direction: TDirection
}

export const Arrow = (props: ICustomArrowsProps) => (
  <button
    className={`
              absolute
              z-10 
              top-[-55px]
              text-5xl 
              text-white
              hover:text-blue-400
              border-none
              cursor-pointer
              ${props.direction === 'left' ? 'left-[10px]' : 'left-[60px] rotate-180'}
              `}
    onClick={props.onClick}>
    <BiSolidLeftArrow />
  </button>
)
