import { motion } from 'framer-motion'
import { animation } from '../lib/framerAnimations'

const ExperienceCard = ({ date, enterprise, position, description }) => {
  return (
    <div className="p-6 rounded-lg hover:shadow-lg w-full hover:bg-white hover:dark:bg-zinc-800 transition-all duration-300">
      <motion.div
        variants={animation(0.1)}
        whileInView="visible"
        initial="hidden"
        viewport={{ once: true }}
        className="flex justify-between items-center"
      >
        <p className="text-sm text-gray-500 dark:text-gray-400">{date}</p>
        <a
          href="#"
          className="text-blue-400 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          {enterprise} ↗
        </a>
      </motion.div>
      <motion.h3
        variants={animation(0.15)}
        whileInView="visible"
        initial="hidden"
        viewport={{ once: true }}
        className="text-xl font-semibold mt-2 text-zinc-800 dark:text-zinc-100"
      >
        {position}
      </motion.h3>
      <motion.p
        variants={animation(0.2)}
        whileInView="visible"
        initial="hidden"
        viewport={{ once: true }}
        className="mt-4 text-sm text-zinc-600 dark:text-zinc-400"
      >
        {description}
      </motion.p>
    </div>
  )
}

export default ExperienceCard
