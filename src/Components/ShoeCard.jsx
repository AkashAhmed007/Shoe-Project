import PropTypes from "prop-types";
function ShoeCard({ imgURL, changeBigShoeImage, bigShoeImg }) {
  const handleClick = () => {
    if (bigShoeImg !== imgURL.bigShoe) {
      changeBigShoeImage(imgURL.bigShoe);
    }
  };
  return (
    <div
      className={`rounded-xl ${bigShoeImg === imgURL.bigShoe ? 'border border-red-600' : 'border-none'} cursor-pointer max-sm:flex-1`}
      onClick={handleClick}
    >
      <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
        <img src={imgURL.thumbnail} alt="" width={127} height={103} />
      </div>
    </div>
  );
}
ShoeCard.propTypes = {
  imgURL: PropTypes.object,
  changeBigShoeImage: PropTypes.func,
  bigShoeImg: PropTypes.string,
};
export default ShoeCard;
