import { RiReactjsLine } from 'react-icons/ri'
import { animate, motion } from 'framer-motion'

const Habilities = () => {
  const animation = (delay) => ({
    hidden: { x: 100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: delay } },
  })

  const iconVariation = (duration) => ({
    initial: { y: 20 },
    animate: {
      y: [20, 10],
      transition: {
        duration: duration,
        repeat: Infinity,
        repeatType: 'reverse',
      },
    },
  })

  return (
    <motion.div
      variants={animation(0.1)}
      whileInView="visible"
      initial="hidden"
      className="flex flex-wrap items-center justify-center gap-4"
    >
      <motion.div
        variants={iconVariation(1.7)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-2 border-neutral-800 p-2"
      >
        <RiReactjsLine className="text-4xl text-cyan-400" />
      </motion.div>
      <motion.div
        variants={iconVariation(2)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-2 border-neutral-800 p-2"
      >
        <RiReactjsLine className="text-4xl text-cyan-400" />
      </motion.div>
      <motion.div
        variants={iconVariation(1.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-2 border-neutral-800 p-2"
      >
        <RiReactjsLine className="text-4xl text-cyan-400" />
      </motion.div>
      <motion.div
        variants={iconVariation(1.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-2 border-neutral-800 p-2"
      >
        <RiReactjsLine className="text-4xl text-cyan-400" />
      </motion.div>
      <motion.div
        variants={iconVariation(1.3)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-2 border-neutral-800 p-2"
      >
        <RiReactjsLine className="text-4xl text-cyan-400" />
      </motion.div>
    </motion.div>
  )
}

export default Habilities
