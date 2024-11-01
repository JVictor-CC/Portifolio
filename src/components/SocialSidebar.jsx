import { FaGithub, FaInstagram, FaLinkedin, FaKaggle } from 'react-icons/fa'
import { BiLogoGmail } from 'react-icons/bi'

const SocialSidebar = () => {
  return (
    <nav
      aria-label="Social Media Links"
      className="fixed top-0 left-0 z-40 h-screen w-20 flex items-end justify-center"
    >
      <ul className="flex flex-col items-center justify-center space-y-4 dark:text-zinc-300 text-zinc-700">
        <li>
          <a
            href="https://github.com/JVictor-CC"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub
              size={24}
              className="dark:hover:text-blue-500 hover:text-blue-700 transition-all duration-300"
            />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/jvictor-cc/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin
              size={24}
              className="dark:hover:text-blue-500 hover:text-blue-700 transition-all duration-300"
            />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/jv_scunha/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram
              size={24}
              className="dark:hover:text-blue-500 hover:text-blue-700 transition-all duration-300"
            />
          </a>
        </li>

        <li>
          <a
            href="https://www.kaggle.com/joovictordesouza"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaKaggle
              size={24}
              className="dark:hover:text-blue-500 hover:text-blue-700 transition-all duration-300"
            />
          </a>
        </li>
        <li>
          <a
            href="mailto:jvcunha1221@outlook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <BiLogoGmail
              size={24}
              className="dark:hover:text-blue-500 hover:text-blue-700 transition-all duration-300"
            />
          </a>
        </li>
        <li className="w-px h-20 bg-gray-400 mt-4 group-hover:bg-blue-500 transition-all duration-300"></li>
      </ul>
    </nav>
  )
}

export default SocialSidebar
