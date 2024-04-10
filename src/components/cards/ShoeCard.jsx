import PropTypes from "prop-types";

const ShoeCard = ({ imgURL, changeBigShoeImage, bigShoeImg }) => {
  const handleClick = () => {
    console.log("inside handleClick", bigShoeImg, imgURL.bigShoe);
    if (bigShoeImg !== imgURL.bigShoe) {
      changeBigShoeImage(imgURL.bigShoe);
    }
  };

  return (
    <button
      className={`border-2 rounded-xl ${
        bigShoeImg === imgURL.bigShoe
          ? "border-coral-red"
          : "border-transparent"
      } cursor-pointer max-sm:flex-1 transition-transform duration-[450ms] hover:scale-[1.08]`}
      onClick={handleClick}
    >
      <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
        <img
          src={imgURL.thumbnail}
          alt="shoe colletion"
          width={127}
          height={103.34}
          className="object-contain"
        />
      </div>
    </button>
  );
};

ShoeCard.propTypes = {
  bigShoeImg: PropTypes.string.isRequired,
  imgURL: PropTypes.object.isRequired,
  changeBigShoeImage: PropTypes.func.isRequired,
};

export default ShoeCard;
