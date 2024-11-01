import { useEffect } from 'react'

const Cursor = () => {
  useEffect(() => {
    const cursorDot = document.querySelector('[data-cursor-dot]')
    const cursorOutline = document.querySelector('[data-cursor-outline]')

    const handleMouseMove = (e) => {
      const posX = e.clientX
      const posY = e.clientY

      if (cursorDot) {
        cursorDot.style.left = `${posX}px`
        cursorDot.style.top = `${posY}px`
      }

      if (cursorOutline) {
        cursorOutline.animate(
          {
            left: `${posX}px`,
            top: `${posY}px`,
          },
          { duration: 300, fill: 'forwards' }
        )
      }
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <>
      <div data-cursor-dot className="cursor w-[6px] h-[6px] dark:bg-white bg-black"></div>
      <div
        data-cursor-outline
        className="cursor w-8 h-8 border-2 dark:border-slate-300 border-slate-500"
      ></div>
    </>
  )
}

export default Cursor
