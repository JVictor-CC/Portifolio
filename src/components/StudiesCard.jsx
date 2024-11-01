import { motion } from 'framer-motion'

const StudiesCard = ({ date, institution, course }) => {
  const animation = (delay) => ({
    hidden: { x: 100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: delay } },
  })

  return (
    <div className=" p-6 rounded-lg hover:shadow-lg hover:bg-white hover:dark:bg-zinc-800 w-full transition-all duration-300">
      <motion.div
        variants={animation(0.1)}
        whileInView="visible"
        initial="hidden"
        className="flex justify-between items-center"
      >
        <p className="text-sm text-gray-500 dark:text-gray-400">{date}</p>
        <a
          href="#"
          className="text-blue-400 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          {institution}
        </a>
      </motion.div>
      <motion.h3
        variants={animation(0.2)}
        whileInView="visible"
        initial="hidden"
        className="text-xl font-semibold mt-2 text-gray-700 dark:text-gray-300"
      >
        {course}
      </motion.h3>
    </div>
  )
}

export default StudiesCard
