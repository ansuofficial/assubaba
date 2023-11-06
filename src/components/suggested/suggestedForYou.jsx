const suggestedPhonesData = [
  {
    img: "https://m.media-amazon.com/images/I/71J8tz0UeJL._SL1500_.jpg",
    name: "iphone 15 promax",
    description: "Latest iphone, the best smart phone in 2023",
  },
  {
    img: "https://m.media-amazon.com/images/I/71J8tz0UeJL._SL1500_.jpg",
    name: "iphone 15 promax",
    description: "Latest iphone, the best smart phone in 2023",
  },
  {
    img: "https://m.media-amazon.com/images/I/71J8tz0UeJL._SL1500_.jpg",
    name: "iphone 15 promax",
    description: "Latest iphone, the best smart phone in 2023",
  },
  {
    img: "https://m.media-amazon.com/images/I/71J8tz0UeJL._SL1500_.jpghttps://m.media-amazon.com/images/I/71J8tz0UeJL._SL1500_.jpg",
    name: "iphone 15 promax",
    description: "Latest iphone, the best smart phone in 2023",
  },
  {
    img: "https://m.media-amazon.com/images/I/71J8tz0UeJL._SL1500_.jpg",
    name: "iphone 15 promax",
    description: "Latest iphone, the best smart phone in 2023",
  },
  {
    img: "https://m.media-amazon.com/images/I/71J8tz0UeJL._SL1500_.jpg",
    name: "iphone 15 promax",
    description: "Latest iphone, the best smart phone in 2023",
  },
  {
    img: "https://m.media-amazon.com/images/I/71J8tz0UeJL._SL1500_.jpg",
    name: "iphone 15 promax",
    description: "Latest iphone, the best smart phone in 2023",
  },
];

const SuggestedPhones = () => {
  return (
    <div className="popular-phones-wrapper">
      <div className="popular-phones-title">
        <h1>Suggested for you</h1>
        <i class="bi bi-arrow-right"></i>
      </div>
      <div className="popular-phones">
        {suggestedPhonesData.map((c) => {
          return <SuggestedPhonesCard {...c} />;
        })}
      </div>
    </div>
  );
};
const SuggestedPhonesCard = (props) => {
  const { img, name, description } = props;
  return (
    <div className="popularPhonesCard-wrapper">
      <div className="popularPhones-content">
        <img src={img} alt="popular phones image" />
        <p>{name}</p>
        <p>{description}</p>
      </div>
    </div>
  );
};
export default SuggestedPhones;
