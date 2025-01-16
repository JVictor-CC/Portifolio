import { motion } from 'framer-motion'
import { animation } from '../lib/framerAnimations'
import Tooltip from '@mui/material/Tooltip'
import { Zoom } from '@mui/material'

const Habilities = () => {
  const icons = [
    { url: 'https://skillicons.dev/icons?i=vite', alt: 'Vite', tooltip: 'Vite' },
    {
      url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      alt: 'React',
      tooltip: 'React',
    },
    {
      url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      alt: 'JavaScript',
      tooltip: 'JavaScript',
    },
    {
      url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
      alt: 'HTML5',
      tooltip: 'HTML5',
    },
    {
      url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
      alt: 'CSS3',
      tooltip: 'CSS3',
    },
    {
      url: 'https://cdn.simpleicons.org/tailwindcss/06B6D4',
      alt: 'Tailwind CSS',
      tooltip: 'Tailwind CSS',
    },
    {
      url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
      alt: 'Node.js',
      tooltip: 'Node.js',
    },
    {
      url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
      alt: 'MongoDB',
      tooltip: 'MongoDB',
    },
    {
      url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
      alt: 'PostgreSQL',
      tooltip: 'PostgreSQL',
    },
    {
      url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
      alt: 'Docker',
      tooltip: 'Docker',
    },
    {
      url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg',
      alt: 'R',
      tooltip: 'R',
    },
    {
      url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
      alt: 'Java',
      tooltip: 'Java',
    },
  ]

  return (
    <motion.div
      variants={animation(0.1)}
      whileInView="visible"
      initial="hidden"
      viewport={{ once: true }}
      className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-4 gap-y-1"
    >
      {icons.map((icon, index) => (
        <motion.div key={index} className="rounded-2xl border-neutral-800 p-2 flex justify-center">
          <Tooltip TransitionComponent={Zoom} title={icon.tooltip} placement="top" arrow>
            <img src={icon.url} alt={icon.alt} className="w-16 h-16" />
          </Tooltip>
        </motion.div>
      ))}
    </motion.div>
  )
}

export default Habilities
