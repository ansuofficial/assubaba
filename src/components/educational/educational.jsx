const educationalPhonesData = [
  {
    img: "https://m.media-amazon.com/images/I/71Mt4JAZQtL.jpg",
    name: "Tab 9 pro",
    price: "D500",
  },
  {
    img: "https://m.media-amazon.com/images/I/71Mt4JAZQtL.jpg",
    name: "Tab 9 pro",
    price: "D500",
  },
  {
    img: "https://m.media-amazon.com/images/I/71Mt4JAZQtL.jpg",
    name: "Tab 9 pro",
    price: "D500",
  },
  {
    img: "https://m.media-amazon.com/images/I/71Mt4JAZQtL.jpg",//m.media-amazon.com/images/I/71J8tz0UeJL._SL1500_.jpg",
    name: "Tab 9 pro",
    price: "D500",
  },
  {
    img: "https://m.media-amazon.com/images/I/71Mt4JAZQtL.jpg",
    name: "Tab 9 pro",
    price: "D500",
  },
  {
    img: "https://m.media-amazon.com/images/I/71Mt4JAZQtL.jpg",
    name: "Tab 9 pro",
    price: "D500",
  },
  {
    img: "https://m.media-amazon.com/images/I/71Mt4JAZQtL.jpg",
    name: "Tab 9 pro",
    price: "D500",
  },
];

const EducationalPhones = () => {
  return (
    <div className="popular-phones-wrapper">
      <div className="popular-phones-title">
        <h1>Educational</h1>
        <i class="bi bi-arrow-right"></i>
      </div>
      <div className="popular-phones">
        {educationalPhonesData.map((c) => {
          return <EducationalPhonesCard {...c} />;
        })}
      </div>
    </div>
  );
};
const EducationalPhonesCard = (props) => {
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
export default EducationalPhones;
