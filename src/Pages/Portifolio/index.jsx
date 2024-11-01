import { useState, useEffect } from 'react'
import ThemeToggler from '../../components/ThemeToggler'
import About from './About'
import Experience from './Experience'
import Projects from './Projects'
import Studies from './Studies'
import SocialSidebar from '../../components/SocialSidebar'
import SocialTab from '../../components/SocialTab'
import { motion } from 'framer-motion'
import Profile from '../../assets/perfil_720p.jpg'

const Portifolio = () => {
  const [activeSection, setActiveSection] = useState('')

  const animation = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: delay } },
  })

  useEffect(() => {
    const sections = document.querySelectorAll('section')
    const options = {
      root: null,
      threshold: 0.5,
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }, options)

    sections.forEach((section) => {
      observer.observe(section)
    })

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section)
      })
    }
  }, [])

  return (
    <>
      <ThemeToggler />
      <span className="hidden xl:block">
        <SocialSidebar />
      </span>
      <div className="max-w-screen-xl min-h-screen mx-auto dark:bg-zinc-700 bg-zinc-100 dark:text-zinc-100 text-zinc-700 flex justify-center font-inter">
        <div className="mt-10 mx-6 flex flex-col lg:flex-row lg:justify-center lg:items-start lg:space-x-10 lg:py-10">
          <header className="lg:sticky lg:top-0 lg:max-h-screen w-full flex flex-col justify-between sm:px-10 py-4">
            <div>
              <div className="mb-10 flex flex-col">
                <motion.h1
                  variants={animation(0.2)}
                  initial="hidden"
                  animate="visible"
                  className="text-4xl md:text-5xl mb-3"
                >
                  João Victor de Souza
                </motion.h1>
                <motion.h2
                  variants={animation(0.4)}
                  initial="hidden"
                  animate="visible"
                  className="text-lg md:text-xl font-medium mb-2"
                >
                  Desenvolvedor Fullstack
                </motion.h2>
                <motion.img
                  src={Profile}
                  variants={animation(0.6)}
                  initial="hidden"
                  animate="visible"
                  className="w-80 mt-10 self-center rounded-md shadow-md"
                />
              </div>
              <nav className="hidden lg:block">
                <ul className="dark:text-zinc-300 text-zinc-500 space-y-1">
                  <li
                    className={`dark:hover:dark:text-zinc-100  hover:text-zinc-700 hover:scale-105 transform transition-all duration-300 ease-in-out ${
                      activeSection === 'about'
                        ? 'text-zinc-700 dark:text-zinc-100 font-bold scale-105'
                        : ''
                    }`}
                  >
                    <a href="#about">Sobre Mim</a>
                  </li>
                  <li
                    className={`dark:hover:dark:text-zinc-100 hover:text-zinc-700 hover:scale-105 transform transition-all duration-300 ease-in-out ${
                      activeSection === 'experience'
                        ? 'text-zinc-700 dark:text-zinc-100 font-bold scale-105'
                        : ''
                    }`}
                  >
                    <a href="#experience">Experiência</a>
                  </li>
                  <li
                    className={`dark:hover:dark:text-zinc-100 hover:text-zinc-700 hover:scale-105 transform transition-all duration-300 ease-in-out ${
                      activeSection === 'studies'
                        ? 'text-zinc-700 dark:text-zinc-100 font-bold scale-105'
                        : ''
                    }`}
                  >
                    <a href="#studies">Formação</a>
                  </li>
                  <li
                    className={`dark:hover:dark:text-zinc-100 hover:text-zinc-700 hover:scale-105 transform transition-all duration-300 ease-in-out ${
                      activeSection === 'projects'
                        ? 'text-zinc-700 dark:text-zinc-100 font-bold scale-105'
                        : ''
                    }`}
                  >
                    <a href="#projects">Projetos</a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="flex justify-center mt-20 xl:hidden">
              <SocialTab />
            </div>
          </header>
          <main className="w-full sm:px-10">
            <section id="about" className="pt-10 mb-20">
              <h1 className="mb-5 text-xl font-medium">Sobre Mim</h1>
              <About />
            </section>
            <section id="experience" className="mb-20">
              <h1 className="mb-5 text-xl font-medium">Experiência</h1>
              <Experience />
            </section>
            <section id="studies" className="mb-20">
              <h1 className="mb-5 text-xl font-medium">Formação</h1>
              <Studies />
            </section>
            <section id="projects" className="mb-20">
              <h1 className="mb-5 text-xl font-medium">Projetos</h1>
              <Projects />
            </section>
          </main>
        </div>
      </div>
    </>
  )
}

export default Portifolio
