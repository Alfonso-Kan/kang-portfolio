'use client'

import FooterButtons from "./CustomFooter";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";



interface IFooterComponent {
    className?: string
}

const FooterComponent  = (props: IFooterComponent) => {
      
    const socialMedia = [
        {key: 1, icon: <FaGithub />, name: 'github/Alfonso-Kan', color: 'bg-kang-github', link:  'https://github.com/Alfonso-Kan' },
        {key: 2, icon: <FaLinkedin />, name: 'Linkedin/Alfonso-Kang-Silveira', color: 'bg-kang-linkedin', link: 'https://www.linkedin.com/in/alfonso-kang-silveira-9b3050210/' },
        {key: 3, icon: <SiGmail />, name: 'Alf.KS7791@gmail.com' , color: 'bg-kang-gmail', link: 'mailto:Alf.KS7791@gmail.com?subject=Asunto del correo&body=Hola%20Alfonso,%20nos%20encantaría%20trabajar%20contigo...' },
        {key: 4, icon: <FaWhatsapp />, name: '999-94-11-26-71' , color: 'bg-kang-whatsapp', link: 'https://wa.me/529994112671?text=Hola%20Alfonso,%20nos%20encantaria%20trabajar%20contigo...' }
    ]

    return (
        //section que este dividida en dos culumnas en pantallas menores en md y una en pantallas menores a md
        <section id="Contact" className={`${props.className} flex flex-col md:flex-row items-center justify-center md:justify-between relative`}>
            {/* Sección de las redes sociales */}
                <div className="flex flex-col justify-center items-center my-4 w-full">
                    <h4 className="flex flex-row text-5xl text-white font-kang-cracked text-nowrap">KANG<p className="text-kang-red-900">DEV</p></h4>
                    <p className="text-2xl font-kang-pixels text-white">Visita alguna de mis redes sociales...</p>
                </div>
                {/* aqui va el enlace entre las redes sociales */}
                <div className="flex flex-row justify-center items-center my-4 gap-x-4 bg-transparent w-full">
                    {socialMedia.map(social => (
                    <FooterButtons key={social.key} href={social.link} text={social.name} color={social.color} className="text-nowrap cursor-default">
                        {social.icon}
                    </FooterButtons>
                    ))}
                </div>
        </section>
    )
}

export default FooterComponent;