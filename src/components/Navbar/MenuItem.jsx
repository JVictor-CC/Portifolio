import PropTypes from 'prop-types'

const MenuItem = ({ text, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`py-1 h-full transition duration-300 ease-in-out min-w-[100px] font-semibold border-blue-500 ${
        isActive
          ? 'text-white border-b-4  shadow-lg'
          : 'text-gray-100 hover:text-blue-400 hover:border-b-2'
      }`}
    >
      {text}
    </button>
  )
}

MenuItem.propTypes = {
  text: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default MenuItem
