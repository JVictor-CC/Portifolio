import { FaGithub, FaInstagram, FaLinkedin, FaKaggle } from 'react-icons/fa'
import { BiLogoGmail } from 'react-icons/bi'
import Tooltip from '@mui/material/Tooltip'
import Zoom from '@mui/material/Zoom'

const SocialSidebar = () => {
  const socialNet = [
    { url: 'https://github.com/JVictor-CC', label: 'GitHub', icon: FaGithub },
    { url: 'https://www.linkedin.com/in/jvictor-cc/', label: 'LinkedIn', icon: FaLinkedin },
    { url: 'https://www.instagram.com/jv_scunha/', label: 'Instagram', icon: FaInstagram },
    { url: 'https://www.kaggle.com/joovictordesouza', label: 'Kaggle', icon: FaKaggle },
    { url: 'mailto:jvcunha1221@outlook.com', label: 'Gmail', icon: BiLogoGmail },
  ]

  return (
    <nav
      aria-label="Social Media Links"
      className="fixed top-0 left-0 z-40 h-screen w-20 flex items-end justify-center"
    >
      <ul className="flex flex-col items-center justify-center space-y-4 dark:text-zinc-300 text-zinc-700">
        {socialNet.map(({ url, label, icon: Icon }, index) => (
          <li key={index}>
            <a href={url} target="_blank" rel="noopener noreferrer" aria-label={label}>
              <Tooltip title={label} TransitionComponent={Zoom} placement="right" arrow>
                <span>
                  <Icon
                    size={24}
                    className="dark:hover:text-blue-500 hover:text-blue-700 transition-all duration-300"
                  />
                </span>
              </Tooltip>
            </a>
          </li>
        ))}
        <li className="w-px h-20 bg-gray-400 mt-4 group-hover:bg-blue-500 transition-all duration-300"></li>
      </ul>
    </nav>
  )
}

export default SocialSidebar
