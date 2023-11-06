const suggestedPhonesData = [
  {
    img: "http://www.imagineonline.store/cdn/shop/files/iPhone_15_Pro_Max_Blue_Titanium_PDP_Image_Position-1__en-IN_493x.jpg",
    name: "iphone 15 promax",
    description: "Latest iphone, the best smart phone in 2023",
  },
  {
    img: "http://www.imagineonline.store/cdn/shop/files/iPhone_15_Pro_Max_Blue_Titanium_PDP_Image_Position-1__en-IN_493x.jpg",
    name: "iphone 15 promax",
    description: "Latest iphone, the best smart phone in 2023",
  },
  {
    img: "http://www.imagineonline.store/cdn/shop/files/iPhone_15_Pro_Max_Blue_Titanium_PDP_Image_Position-1__en-IN_493x.jpg",
    name: "iphone 15 promax",
    description: "Latest iphone, the best smart phone in 2023",
  },
  {
    img: "http://www.imagineonline.store/cdn/shop/files/iPhone_15_Pro_Max_Blue_Titanium_PDP_Image_Position-1__en-IN_493x.jpg",
    name: "iphone 15 promax",
    description: "Latest iphone, the best smart phone in 2023",
  },
  {
    img: "http://www.imagineonline.store/cdn/shop/files/iPhone_15_Pro_Max_Blue_Titanium_PDP_Image_Position-1__en-IN_493x.jpg",
    name: "iphone 15 promax",
    description: "Latest iphone, the best smart phone in 2023",
  },
  {
    img: "http://www.imagineonline.store/cdn/shop/files/iPhone_15_Pro_Max_Blue_Titanium_PDP_Image_Position-1__en-IN_493x.jpg",
    name: "iphone 15 promax",
    description: "Latest iphone, the best smart phone in 2023",
  },
  {
    img: "http://www.imagineonline.store/cdn/shop/files/iPhone_15_Pro_Max_Blue_Titanium_PDP_Image_Position-1__en-IN_493x.jpg",
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
