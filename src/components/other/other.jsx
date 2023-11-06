const otherPhonesData = [
  {
    img: "http://www.imagineonline.store/cdn/shop/files/iPhone_15_Pro_Max_Blue_Titanium_PDP_Image_Position-1__en-IN_493x.jpg",
    name: "iphone 15 promax",
  },
  {
    img: "http://www.imagineonline.store/cdn/shop/files/iPhone_15_Pro_Max_Blue_Titanium_PDP_Image_Position-1__en-IN_493x.jpg",
    name: "iphone 15 promax",
  },
  {
    img: "http://www.imagineonline.store/cdn/shop/files/iPhone_15_Pro_Max_Blue_Titanium_PDP_Image_Position-1__en-IN_493x.jpg",
    name: "iphone 15 promax",
  },
  {
    img: "http://www.imagineonline.store/cdn/shop/files/iPhone_15_Pro_Max_Blue_Titanium_PDP_Image_Position-1__en-IN_493x.jpg",
    name: "iphone 15 promax",
  },
  {
    img: "http://www.imagineonline.store/cdn/shop/files/iPhone_15_Pro_Max_Blue_Titanium_PDP_Image_Position-1__en-IN_493x.jpg",
    name: "iphone 15 promax",
  },
  {
    img: "http://www.imagineonline.store/cdn/shop/files/iPhone_15_Pro_Max_Blue_Titanium_PDP_Image_Position-1__en-IN_493x.jpg",
    name: "iphone 15 promax",
  },
  {
    img: "http://www.imagineonline.store/cdn/shop/files/iPhone_15_Pro_Max_Blue_Titanium_PDP_Image_Position-1__en-IN_493x.jpg",
    name: "iphone 15 promax",
  },
  {
    img: "http://www.imagineonline.store/cdn/shop/files/iPhone_15_Pro_Max_Blue_Titanium_PDP_Image_Position-1__en-IN_493x.jpg",
    name: "iphone 15 promax",
  },
];

const OtherPhones = () => {
  return (
    <div className="popular-phones-wrapper">
      <div className="other-phones-title">
        <h1>Other phones</h1>
        {/* <i class="bi bi-arrow-right"></i> */}
      </div>
      <div className="other-phones">
        {otherPhonesData.slice(0, 4).map((c) => {
          return <OtherPhonesCard {...c} />;
        })}
      </div>
      <div className="button-wrapper">
        <button>Show more...</button>
      </div>
    </div>
  );
};
const OtherPhonesCard = (props) => {
  const { img, name, price } = props;
  return (
    <div className="popularPhonesCard-wrapper">
      <div className="otherPhones-content">
        <img src={img} alt="popular phones image" />
        <p>{name}</p>
        <p>{price}</p>
      </div>
      
    </div>
  );
};
export default OtherPhones;