import PropTypes from "prop-types";
function ServiceCard({ imgURL, label, subtext }) {
  return (
    <div className="flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl lg:px-10 px-5 lg:py-16 py-10">
      <div className="w-11 h-11 flex justify-center items-center bg-coral-red rounded-full">
        <img src={imgURL} alt={label} width={24} height={24} />
      </div>
      <h2 className="mt-3 text-2xl font-palanquin font-bold leading-normal">{label}</h2>
      <p className="mt-3 text-xl break-words font-montserrat leading-normal text-slate-gray">{subtext}</p>
    </div>
  );
}
ServiceCard.propTypes = {
    label: PropTypes.string,
    imgURL: PropTypes.string,
    subtext: PropTypes.string,
  };
export default ServiceCard;
