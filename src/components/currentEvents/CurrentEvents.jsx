const currentEventsData = [
  {
    img: "https://www.investopedia.com/thmb/3YM63R0-ZDjw1FQnyRTjlL-0HFw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/affiliate-marketing-6a9d278b2e91467494d7c9168e17bab5.jpg",
  },
  {
    img: "https://blog.vantagecircle.com/content/images/2020/08/employee-discount.png",
  },
  {
    img: "https://scandiweb.com/blog/wp-content/uploads/2021/12/blog-banner_payment-methods.png",
  },
  {
    img: "https://www.wondersoft.com/wp-content/uploads/2021/09/EC-Blog.jpg",
  },
];

const CurrentEvents = () => {
  return (
    <div className="popular-phones-wrapper">
      <div className="currentEvents-title">
        <h1>Upcomming events</h1>
        <i class="bi bi-arrow-right"></i>
      </div>
      <div className="currentEvents-phones">
        {currentEventsData.map((c) => {
          return <CurrentEventsCard {...c} />;
        })}
      </div>
    </div>
  );
};
const CurrentEventsCard = (props) => {
  const { img, name, price } = props;
  return (
    <div className="popularPhonesCard-wrapper">
      <div className="currentEvents-content">
        <img src={img} alt="popular phones image" />
        <p>
          <a href="#">Learn more</a>
        </p>
      </div>
    </div>
  );
};
export default CurrentEvents;
