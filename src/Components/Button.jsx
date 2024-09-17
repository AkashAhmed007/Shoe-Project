import PropTypes from 'prop-types';
function Button({label,iconURL,backgroundColor,textColor,borderColor,fullWidth}) {
  return (
    <button className={`flex justify-center items-center gap-2 px-7 py-4 border leading-none text-lg
      ${
        backgroundColor ? `${backgroundColor} ${textColor} ${borderColor}`: "text-white bg-coral-red border-coral-red"

      }
     rounded-full ${fullWidth && 'w-full'}font-montserrat`}>
        {label}
        {iconURL && <img src={iconURL} alt="arrow right icon" className="ml-2 rounded-full w-5 h-5" />}
    </button>
  )
}
Button.propTypes = {
    label: PropTypes.string,
    iconURL:PropTypes.string,
    backgroundColor:PropTypes.string,
    textColor:PropTypes.string,
    borderColor:PropTypes.string,
    fullWidth:PropTypes.string,
  };
export default Button