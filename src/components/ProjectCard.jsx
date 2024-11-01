import { motion } from 'framer-motion'

const ProjectCard = ({ imageSrc, projectName, description, tools, url }) => {
  const animation = (delay) => ({
    hidden: { x: 100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: delay } },
  })

  return (
    <div className="flex flex-row justify-center hover:bg-white hover:dark:bg-zinc-800 hover:shadow-lg rounded-lg sm:px-4 py-4 space-x-6 transition-all duration-500">
      <motion.div
        variants={animation(0.1)}
        whileInView="visible"
        initial={{ x: -100, opacity: 0 }}
        className="w-1/3 flex justify-center"
      >
        <img src={imageSrc} alt={projectName} className="w-full max-w-32 h-auto rounded-lg" />
      </motion.div>
      <div className="w-full md:w-2/3 flex flex-col space-y-2">
        <motion.a
          variants={animation(0.1)}
          whileInView="visible"
          initial="hidden"
          href={url}
          target="_blank"
          className="text-base lg:text-lg font-bold text-zinc-800 dark:text-zinc-100 hover:underline"
        >
          {projectName}
        </motion.a>
        <motion.p
          variants={animation(0.15)}
          whileInView="visible"
          initial="hidden"
          className="text-sm text-zinc-600 dark:text-zinc-400"
        >
          {description}
        </motion.p>
        <div className="flex flex-wrap space-x-2 mt-2">
          {tools.map((tool, index) => (
            <motion.span
              variants={animation(0.1 + index * 0.2)}
              whileInView="visible"
              initial="hidden"
              key={index}
              className="text-xs bg-zinc-200 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-100 rounded-full px-3 py-1"
            >
              {tool}
            </motion.span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
