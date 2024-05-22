'use client'
import { useState, useEffect } from "react"
import { MdWbSunny, MdDarkMode } from "react-icons/md"

const DarkMode = () => {
    const [darkMode, setDarkMode] = useState(true)

    const toggleIcon = () => {
        setDarkMode(!darkMode)
    }

    //#1 Corre cada que el componente se monta
    useEffect(() => {
        const theme = localStorage.getItem('theme');
        if (theme === "dark") setDarkMode(true);
    }, [])

    //# Se ejecuta dependinedo del state Cuando el DarkMode Cambie
    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark')
            localStorage.setItem('theme', 'dark')
        } else {
            document.documentElement.classList.remove('dark')
            localStorage.setItem('theme', 'light')
        }
    }, [darkMode])

    return (
        <button
            className={`hidden md:flex justify-center items-center ${darkMode ? 'text-white' : 'text-kang-gray-900' } text-4xl mx-7`}
            onClick={toggleIcon}>
            {darkMode ? <MdWbSunny /> : <MdDarkMode />}
        </button>
    )
}

export default DarkMode;