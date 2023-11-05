const popularPhonesData = [
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

const PopularPhones = () => {
  return (
    <div className="popular-phones-wrapper">
      <h1>popular phones</h1>
      <div className="popular-phones">
        {popularPhonesData.map((c) => {
          return <PopularPhonesCard {...c} />;
        })}
      </div>
    </div>
  );
};
const PopularPhonesCard = (props) => {
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
export default PopularPhones;
