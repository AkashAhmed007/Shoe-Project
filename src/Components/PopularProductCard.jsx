import PropTypes from "prop-types";
import {star} from '../assets/icons'
function PopularProductCard({name,imgURL,price}) {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
        <img src={imgURL} alt={name} className="w-[280px] h-[280px]" />
        <div className="flex justify-start gap-2.5 mt-8">
            <img src={star} alt="" width={24}  height={24} />
            <p className='text-xl font-montserrat leading-normal text-slate-gray'>(4.5)</p>
        </div>
        <h1 className='mt-2 text-xl font-semibold font-palanquin leading-normal'>{name}</h1>
        <p className='mt-2 font-montserrat font-semibold text-coral-red text-2xl leading-normal'>{price}</p>
    </div>
  )
}
PopularProductCard.propTypes = {
    name: PropTypes.string,
    imgURL: PropTypes.string,
    price: PropTypes.string,
  };
export default PopularProductCard