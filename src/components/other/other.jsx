import { useState } from "react";

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
  const [visible, setVisible] = useState(4);
  const [showButton, setShowButton] = useState(true);

  const showMore = () => {
    setVisible((prevValue) => prevValue + 4);
    setShowButton(false); // Hide the button after clicking
  };

  const showLess = () => {
    setVisible((prevValue) => prevValue - 4);
    setShowButton(true); // Show the "Show more..." button
  };

  return (
    <div className="popular-phones-wrapper">
      <div className="other-phones-title">
        <h1>Other phones</h1>
      </div>
      <div className="other-phones">
        {otherPhonesData.slice(0, visible).map((phone, index) => {
          return <OtherPhonesCard key={index} {...phone} />;
        })}
      </div>
      <div className="button-wrapper">
        {showButton && (
          <button id="btn" onClick={showMore}>
            Show more...
          </button>
        )}
        {/* The "Show less..." button */}
        {!showButton && (
          <button id="btn1" onClick={showLess}>
            Show less...
          </button>
        )}
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
