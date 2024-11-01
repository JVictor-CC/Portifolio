import { motion } from 'framer-motion'

const About = () => {
  const animation = (delay) => ({
    hidden: { x: 100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: delay } },
  })

  return (
    <section className="dark:text-zinc-300 text-zinc-500">
      <motion.p variants={animation(0.2)} initial="hidden" animate="visible" className="mb-4">
        Olá, me chamo João Victor, sou recém formado em{' '}
        <span className="text-highlight">
          Ciência da Computação na Universidade Federal Fluminense
        </span>{' '}
        e tenho desenvolvido minhas habilidades em comunicação, colaboração e principalmente
        programação.
      </motion.p>

      <motion.p variants={animation(0.4)} initial="hidden" animate="visible" className="mb-4">
        Durante minha jornada acadêmica, me habituei a explorar as áreas da computação, focando
        principalmente nas áreas de{' '}
        <span className="text-highlight">Desenvolvimento Web, Inteligência Artificial e Dados</span>
        . Sempre buscando me manter atualizado com cursos e desenvolvendo projetos pessoais e reais.
      </motion.p>

      <motion.p variants={animation(0.6)} initial="hidden" animate="visible" className="mb-4">
        No meu <span className="text-highlight">Trabalho de Conclusão de Curso</span> desenvolvi um
        projeto que aborda o treinamento de uma inteligencia artificial generativa (como o ChatGpt)
        e o desenvolvimento de uma aplicação com API, para a utilização do modelo de IA e uma
        interface gráfica para interação com usuário. Durante a faculdade tambem realizei um{' '}
        <span className="text-highlight">projeto de iniciação cientifica</span> na área de{' '}
        <span className="text-highlight">Engenharia de Software</span>.
      </motion.p>

      <motion.p variants={animation(0.8)} initial="hidden" animate="visible" className="mb-4">
        Atualmente trabalho como{' '}
        <span className="text-highlight">freelancer com desenvolvimento sites</span>, tanto backend
        quanto frontend, criando{' '}
        <span className="text-highlight">bots com Inteligencia artificial</span> no
        whatsapp/telegram.
      </motion.p>
    </section>
  )
}

export default About
