
const popularPhonesData = [
  {
    img: "http://www.imagineonline.store/cdn/shop/files/iPhone_15_Pro_Max_Blue_Titanium_PDP_Image_Position-1__en-IN_493x.jpg",
    name: "iphone 15 promax",
    price: "D500",
  },
  {
    img: "http://www.imagineonline.store/cdn/shop/files/iPhone_15_Pro_Max_Blue_Titanium_PDP_Image_Position-1__en-IN_493x.jpg",
    name: "iphone 15 promax",
    price: "D500",
  },
  {
    img: "http://www.imagineonline.store/cdn/shop/files/iPhone_15_Pro_Max_Blue_Titanium_PDP_Image_Position-1__en-IN_493x.jpg",
    name: "iphone 15 promax",
    price: "D500",
  },
  {
    img: "http://www.imagineonline.store/cdn/shop/files/iPhone_15_Pro_Max_Blue_Titanium_PDP_Image_Position-1__en-IN_493x.jpg",
    name: "iphone 15 promax",
    price: "D500",
  },
  {
    img: "http://www.imagineonline.store/cdn/shop/files/iPhone_15_Pro_Max_Blue_Titanium_PDP_Image_Position-1__en-IN_493x.jpg",
    name: "iphone 15 promax",
    price: "D500",
  },
  {
    img: "http://www.imagineonline.store/cdn/shop/files/iPhone_15_Pro_Max_Blue_Titanium_PDP_Image_Position-1__en-IN_493x.jpg",
    name: "iphone 15 promax",
    price: "D500",
  },
  {
    img: "http://www.imagineonline.store/cdn/shop/files/iPhone_15_Pro_Max_Blue_Titanium_PDP_Image_Position-1__en-IN_493x.jpg",
    name: "iphone 15 promax",
    price: "D500",
  },
];

const PopularPhones = () => {
  return (
    <div className="popular-phones-wrapper">
      <div className="popular-phones-title">
        <h1>popular phones</h1>
        <i class="bi bi-arrow-right"></i>
      </div>
      <div className="popular-phones">
        {popularPhonesData.map((c) => {
          return <PopularPhonesCard {...c} />;
        })}
      </div>
    </div>
  );
};
const PopularPhonesCard = (props) => {
  const { img, name, price } = props;
  return (
    <div className="popularPhonesCard-wrapper">
      <div className="popularPhones-content">
        <img src={img} alt="popular phones image" />
        <p>{name}</p>
        <p>{price}</p>
      </div>
    </div>
  );
};
export default PopularPhones;
