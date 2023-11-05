const popularPhonesData = [
  {
    name: "iphone 15 promax",
    description: "Latest iphone, the best smart phone in 2023",
  },
  {
    name: "iphone 15 promax",
    description: "Latest iphone, the best smart phone in 2023",
  },
  {
    name: "iphone 15 promax",
    description: "Latest iphone, the best smart phone in 2023",
  },
  {
    name: "iphone 15 promax",
    description: "Latest iphone, the best smart phone in 2023",
  },
  {
    name: "iphone 15 promax",
    description: "Latest iphone, the best smart phone in 2023",
  },
  {
    name: "iphone 15 promax",
    description: "Latest iphone, the best smart phone in 2023",
  },
  {
    name: "iphone 15 promax",
    description: "Latest iphone, the best smart phone in 2023",
  },
];

const popularPhones = () => {
    return (
        <div className="popular-phones-wrapper">
            <div className="popular-phones">
                <h1>popular phones</h1>
            </div>
        </div>
    )
}
const popularPhonesCard = (props) => {
    const { name, description } = props;

    return (
        <div className="popularPhonesCard-wrapper">
            <div className="popularPhones-content">
                <img src="" alt="" />
                <p></p>
                <p></p>
            </div>
        </div>
    )
}