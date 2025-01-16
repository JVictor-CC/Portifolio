import { FaGithub, FaInstagram, FaLinkedin, FaKaggle } from 'react-icons/fa'
import { BiLogoGmail } from 'react-icons/bi'
import { motion } from 'framer-motion'

const SocialTab = () => {
  const animation = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: delay } },
  })

  return (
    <nav
      aria-label="Social Media Links"
      className="border-b-[1px] pb-2 border-zinc-500 dark:border-zinc-300"
    >
      <ul className="flex items-center justify-center space-x-2 dark:text-zinc-300 text-zinc-500">
        <motion.li variants={animation(0.8)} initial="hidden" animate="visible">
          <a
            href="https://github.com/JVictor-CC"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub
              size={30}
              className="dark:hover:text-white hover:text-black transition-all duration-300"
            />
          </a>
        </motion.li>
        <motion.li variants={animation(0.8)} initial="hidden" animate="visible">
          <a
            href="https://www.linkedin.com/in/jvictor-cc/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin
              size={30}
              className="dark:hover:text-blue-500 hover:text-blue-700 transition-all duration-300"
            />
          </a>
        </motion.li>
        <motion.li variants={animation(0.8)} initial="hidden" animate="visible">
          <a
            href="https://www.instagram.com/jv_scunha/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram
              size={30}
              className="dark:hover:text-pink-400 hover:text-pink-600 transition-all duration-300"
            />
          </a>
        </motion.li>

        <motion.li variants={animation(0.8)} initial="hidden" animate="visible">
          <a
            href="https://www.kaggle.com/joovictordesouza"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaKaggle
              size={28}
              className="dark:hover:text-blue-500 hover:text-blue-700 transition-all duration-300"
            />
          </a>
        </motion.li>
        <motion.li variants={animation(0.8)} initial="hidden" animate="visible">
          <a
            href="mailto:jvcunha1221@outlook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Email"
          >
            <BiLogoGmail
              size={30}
              className="dark:hover:text-red-500 hover:text-red-600 transition-all duration-300"
            />
          </a>
        </motion.li>
      </ul>
    </nav>
  )
}

export default SocialTab
