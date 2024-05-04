'use client'
import image from 'next/image'
import { TypeAnimation } from 'react-type-animation'

interface INavBarComponentProps {
  className?: string
}

const ProfileComponent = (props: INavBarComponentProps) => {
  return (
   <div className='w-full h-screen flex flex-col justify-between'>
    <div className='grid md:grid-cols2 max-2-[1240] m-auto'>
      {/* SECCIÓN DEL MODELO 3D */}
      <div className='w-full'>

      </div>
      {/* SECCIÓN DE LOS TITULOS */}
        <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
            <p className='text-6xl font-kang-pixels text-white'> Hola, mi nombre es: </p>
            <h1 className='font-kang-3dpixels text-kang-red-900 py-5 text-8xl '>Alfonso Kang</h1>
            <div className='text-2xl text-white font-kang-pixels m-3 p-0'>
            <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'soy Desarrollador entry-level...',
        4000, // wait 1s before replacing "Mice" with "Hamsters"
        'soy Desarrollador Frontend...',
        4000,
        'soy Desarrollador Backend...',
        4000,
        'soy Estudiante Autodidacta...',
        4000
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
    />
            </div>

            <button className='font-kang-pixels text-4xl bg-kang-red-300 hover:bg-kang-red-900 py-2 px-6 sm:w-[60%] my-4 rounded-2xl'>Curriculum vitae</button>
        </div>
    </div>
   </div>
  )
}

export default ProfileComponent