import { FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa'

const SocialTab = () => {
  return (
    <div className="flex justify-between items-center w-fit text-center border border-zinc-600 rounded-full">
      <span className="px-2 text">Social</span>
      <div className="flex justify-center items-center space-x-4 border p-2 rounded-full">
        <a href="https://github.com/JVictor-CC" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-2xl hover:text-gray-400 transition duration-300" />
        </a>
        <a href="https://www.linkedin.com/in/jvictor-cc/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-2xl hover:text-gray-400 transition duration-300" />
        </a>
        <a href="https://www.youtube.com/c/seu-canal" target="_blank" rel="noopener noreferrer">
          <FaYoutube className="text-2xl hover:text-gray-400 transition duration-300" />
        </a>
      </div>
    </div>
  )
}

export default SocialTab
