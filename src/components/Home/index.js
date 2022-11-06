import { Component } from "react";
import Header from "../Header";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";
import Images from "../Images";
import Hostimages from "../Hostimages";

const imageUrls = {
  images: [
    {
      url: "https://a0.muscache.com/im/pictures/e35bb307-05f4-48a4-bdc5-3b2198bb9451.jpg?im_w=1680",
      id: "1",
      para: "collection",
      heading: "Most popular around the world",
      button: "show all",
    },
    {
      url: "https://a0.muscache.com/im/pictures/58819d01-2a71-441d-b3bc-baae0cd64da1.jpg?im_w=1680",
      id: "2",
      para: "collection",
      heading: "Great for team building",
      button: "show all",
    },
    {
      url: "https://a0.muscache.com/im/pictures/bcbd20bb-1654-4ea2-a86c-2cf25666f3b6.jpg?im_w=1680",
      id: "3",
      para: "collection",
      heading: "Fun for the family",
      button: "show all",
    },
  ],
};

const hostImageUrls = {
  hostImages: [
    {
      url: "https://a0.muscache.com/im/pictures/lombard/MtTemplate-2496585-active_media/original/71f6c8fe-048e-4d71-b89e-bc083245b653.jpeg?im_w=1440",
      id: "1",
      rating: "4.99(153)",
      country: "United States",
      location: "Plan The Perfect New York Vacation",
      cost: "From Price:₹1,558/person",
    },
    {
      url: "https://a0.muscache.com/im/pictures/lombard/MtTemplate-2488061-active_media/original/2d2c8d93-f9fc-48c3-975a-84fec4fb951c.jpeg?im_w=480",
      id: "2",
      rating: "4.89(253)",
      country: "Spain",
      location: "Design your trip to Spain",
      cost: "From Price:₹3,102/person",
    },
    {
      url: "https://a0.muscache.com/im/pictures/lombard/MtTemplate-2563542-poster/original/391d04f5-6823-4a9b-a7e4-c86968325e7c.jpeg?im_w=480",
      id: "3",
      rating: "4.97(60)",
      country: "South Korea",
      location: "Craft a custom trip to Korea with Jay",
      cost: "From Price:₹3,504/person",
    },
    {
      url: "https://a0.muscache.com/im/pictures/lombard/MtTemplate-3010357-poster/original/6cdd0bd4-eac2-4657-ab1f-a429ebdafe37.jpeg?im_w=480",
      id: "4",
      rating: "4.99(153)",
      country: "Mexico",
      location: "Live Tulum like a local",
      cost: "From Price:₹630/person",
    },
    {
      url: "https://a0.muscache.com/im/pictures/lombard/MtTemplate-3134396-active_media/original/e4f5bfb7-d45e-477b-a49f-e1bd7f85bcf0.jpg?im_w=480",
      id: "5",
      rating: "4.75(12)",
      country: "United States",
      location: "Plan a trip to amazing Austin",
      cost: "From Price:₹1,558/person",
    },
    {
      url: "https://a0.muscache.com/im/pictures/lombard/MtTemplate-2596268-active_media/original/b0aa65da-e3f6-4bd2-91d3-9e2f127f348a.jpg?im_w=480",
      id: "6",
      rating: "4.49(153)",
      country: "Rome,Italy",
      location: "Create your Rome itinerary with Debora",
      cost: "From Price:₹980/person",
    },
  ],
};

const filters = {
  values: [
    {
      filter: "Dates",
      id: "1",
    },
    {
      filter: "Group size",
      id: "2",
    },
    {
      filter: "Great filters",
      id: "3",
    },
    {
      filter: "Great for groups",
      id: "4",
    },
    {
      filter: "Family-friendly",
      id: "5",
    },
    {
      filter: "Animals",
      id: "6",
    },
    {
      filter: "Arts & writing",
      id: "7",
    },
    {
      filter: "Baking",
      id: "8",
    },
    {
      filter: "Cooking",
      id: "9",
    },
    {
      filter: "Dance",
      id: "10",
    },
  ],
};

const settings1 = {
  dots: false,
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 2000,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
        dots: false,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
      },
    },
  ],
};

const settings2 = {
  dots: false,
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
        dots: false,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
      },
    },
  ],
};

const settings3 = {
  dots: false,
  infinite: true,
  slidesToShow: 8,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 2000,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
        dots: false,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
      },
    },
  ],
};

class Home extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <h1 className="main-heading">New this week</h1>
        <Slider {...settings1} className="carousel">
          {imageUrls.images.map((eachItem) => (
            <Images key={eachItem.id} imagesData={eachItem} />
          ))}
        </Slider>
        <Slider {...settings3} className="carousel">
          {filters.values.map((eachItem) => (
            <div>
              <p className="filter">{eachItem.filter}</p>
            </div>
          ))}
        </Slider>
        <div className="sub-heading-container">
          <h1 className="sub-main-heading">
            Plan a trip with help from local Hosts around the world
          </h1>
          <p className="show">
            <strong>Show (9)</strong>
          </p>
        </div>

        <Slider {...settings2} className="carousel">
          {hostImageUrls.hostImages.map((eachItem) => (
            <Hostimages key={eachItem.id} hostimagesData={eachItem} />
          ))}
        </Slider>
      </div>
    );
  }
}

export default Home;
