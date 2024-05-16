'use clent'
import { Drone } from "./CustomDrone";
import { ToolTip } from "./CustomToolTip";
import { SiTypescript, SiTailwindcss, SiJavascript, SiNodedotjs } from "react-icons/si"
import { FaReact, FaVuejs } from "react-icons/fa6"
import { TbBrandNextjs } from "react-icons/tb";
import { div } from "three/examples/jsm/nodes/Nodes.js";

interface IHistoryComponent {
  className?: string
}

const HistoryComponent = (props: IHistoryComponent) => {

  const techList = [
    { key: 1, name: 'TypeScript' , icon: <SiTypescript />, position: 'bottom'},
    { key: 1, name: 'JavaScript',  icon: <SiJavascript />, position: 'top'},
    { key: 2, name: 'React', icon: <FaReact />, position: 'bottom' },
    { key: 3, name: 'Vue', icon: <FaVuejs />, position: 'top'},
    { key: 3, name: 'TailwindCSS', icon: <SiTailwindcss />, position: 'bottom' },
    { key: 4, name: 'Next.js', icon: <TbBrandNextjs />, position: 'top' },
    { key: 5, name: 'Node.js', icon: <SiNodedotjs />, position: 'bottom' }
  ]


  return  ( 
    <section className={`${props.className} relative  grid grid-cols-1 md:grid-cols-2 h-screen w-full my-5 items-center justify-center overflow-hidden`}>
      {/*Seccion del drone */}
      <div className="absolute  h-screen w-full my-[5]">
        <Drone />
      </div>
      <div className="flex flex-col p-3 bg-kang-gray-900 bg-transparent items-center">
        {/* Enterprise name && position */}
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-4xl text-kang-red-900 font-kang-invasion">TekyLab</h1>
          <h2 className="text-4xl text-white font-kang-pixels">Desarrollador entry-level</h2>
          <h2 className="text-4xl text-white font-kang-pixels">Noviembre 2023 - Actualidad</h2>
        </div>
        {/* Enterprise description */}
        <p className="flex items-start leading-none lg:leading-tight jusitfy-center p-2 m-2 font-kang-pixels text-white text-2xl sm:text-3xl lg:text-4xl ">
          Durante mi tiempo en Tekylab, he tenido el privilegio de formar parte de un equipo
          colaborativo y multidisciplinario dedicado al desarrollo de soluciones innovadoras.
          como miembro de este equipo, trabaje en una variedad de proyectos utilizando tecnologias de
          vanguardia como TypeScript, Vue.js, React.js, Svelte, Node.js, TailwindCSS, Next.js API REST,
          React o Vue, y Flutter.<br />
          Durante este tiempo, no solo tuve la oportunidad de aplicar mis habilidades tecnicas, sino
          tambien de crecer profesionalmente al enfrentar desafios complejos y aprender nuevas tecnologias
          y metodologias de desarrollo
        </p>
        {/* Tecnologías  */}
        <div className="flex flex-row justify-start items-center gap-x-2 lg:gap-x-8 tex-xl sm:text-3xl py-12">
         {techList.map(tech => (
          <p className="text-white hover:text-kang-red-900">
            <ToolTip color='red' content={tech.name} position={tech.position}>
            {tech.icon}
            </ToolTip>
          </p>
         ))}
        </div>
      </div>

      {/* IMAGE */}
      <div className="flex px-6 py-1 m-4 bg-kang-red-900 rounded-xl items-center justify-center border-kang-red-900">
        <img className=" rounded-xl m-5" src="/images/experience.png" alt="tekylab" />
      </div>

    </section>
  )
}

export default HistoryComponent;