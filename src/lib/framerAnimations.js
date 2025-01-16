export const animation = (delay) => ({
  hidden: { x: 100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: delay } },
})

export const iconVariation = (duration) => ({
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
