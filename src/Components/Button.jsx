import PropTypes from 'prop-types';
function Button({label,iconURL}) {
  return (
    <button className="flex justify-center items-center gap-2 px-7 py-4 border rounded-full font-montserrat leading-none text-lg text-white bg-coral-red">
        {label}
        {iconURL && <img src={iconURL} alt="arrow right icon" className="ml-2 rounded-full w-5 h-5" />}
    </button>
  )
}
Button.propTypes = {
    label: PropTypes.string,
    iconURL:PropTypes.string
  };
export default Button