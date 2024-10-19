import "./SneakerBlock.scss";

const SneakerBlock = ({
  name,
  price,
  imageUrl,
  isFavorite,
  favoriteId,
  isAdded,
}) => {
  return (
    <>
      <div className="wrapper">
        <div>
          <div className="title">
            <h3>{name}</h3>
          </div>
          <div>
            <span>
              Price: <b>{price}$</b>
            </span>
            <button>+</button>
          </div>
        </div>
        <img src={imageUrl} alt={name} />
      </div>
    </>
  );
};

export default SneakerBlock;
