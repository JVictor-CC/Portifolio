import { useState } from 'react'
import MenuItem from './MenuItem'
import Logo from './Logo'

import { IoMdMenu, IoMdClose } from 'react-icons/io'

const Navbar = () => {
  const [activeButton, setActiveButton] = useState('Home')
  const [isOpen, setIsOpen] = useState(false)

  const handleMenuClick = (buttonName) => {
    setActiveButton(buttonName)
  }

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="bg-black border-b border-neutral-300/80 fixed top-0 z-10 shadow-md w-full h-12">
      <div className="flex justify-between items-center lg:container px-4 mx-auto relative text-sm h-12">
        <h1></h1>

        <ul className="hidden md:flex space-x-2 h-full">
          <MenuItem
            text="Home"
            isActive={activeButton === 'Home'}
            onClick={() => handleMenuClick('Home')}
          />
          <MenuItem
            text="Sobre"
            isActive={activeButton === 'About'}
            onClick={() => handleMenuClick('About')}
          />
          <MenuItem
            text="Projetos"
            isActive={activeButton === 'Services'}
            onClick={() => handleMenuClick('Services')}
          />
          <MenuItem
            text="Vídeos"
            isActive={activeButton === 'Contact'}
            onClick={() => handleMenuClick('Contact')}
          />
        </ul>

        <div className="hidden md:flex">
          <button className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-4 py-2 rounded-lg">
            <span className="hidden lg:inline">{'Entre em'}</span> Contato
          </button>
        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-100 focus:outline-none text-2xl">
            {isOpen ? <IoMdClose /> : <IoMdMenu />}
          </button>
        </div>
      </div>
      <div>
        {/* Mobile Menu (Dropdown) */}
        {isOpen && (
          <div className="md:hidden mt-4 px-8 space-y-2 flex flex-col">
            <MenuItem text={'Home'} />
            <MenuItem text={'Sobre Mim'} />
            <MenuItem text={'Projetos'} />
            <MenuItem text={'Vídeos'} />
            <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              Entre em Contato
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
