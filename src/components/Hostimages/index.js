import "./index.css";
import { AiFillStar } from "react-icons/ai";
import { BsDot } from "react-icons/bs";

const Hostimages = (props) => {
  const { hostimagesData } = props;
  const { url, rating, country, location, cost } = hostimagesData;

  return (
    <div className="book-im">
      <img src={url} className="image" />
      <div className="value-container">
        <div className="rating-container">
          <AiFillStar />
          <p className="para">{rating}</p>
          <BsDot />
          <p className="heading1">{country}</p>
        </div>
        <p className="heading2">{location}</p>
        <p className="heading3">{cost}</p>
      </div>
    </div>
  );
};
export default Hostimages;
