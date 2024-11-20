import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = () => {
  return (
    <div className="w-full">
      <Carousel>
        <div>
          <img className="w-full" src="https://img.freepik.com/free-vector/online-shopping-banner-template_23-2148764706.jpg?t=st=1732078079~exp=1732081679~hmac=3cbe71c46c43de40ae944f189907415727e63b67869a7b505fa491c9f787f06c&w=826" />
          {/* <p className="legend">Legend 1</p> */}
        </div>
        <div>
          <img className="w-full" src="https://img.freepik.com/free-vector/flat-landing-page-template-11-11-sale-event_23-2150815332.jpg?t=st=1732078371~exp=1732081971~hmac=4b9582e314e9af416247951d7ec5ccd3c271d9fe8203a875c5bee3876a85d1f8&w=900" />
          {/* <p className="legend">Legend 2</p> */}
        </div>
        <div>
          <img className="w-full" src="https://img.freepik.com/free-vector/online-shopping-banner-template_23-2148764706.jpg?t=st=1732078079~exp=1732081679~hmac=3cbe71c46c43de40ae944f189907415727e63b67869a7b505fa491c9f787f06c&w=826" />
          {/* <p className="legend">Legend 3</p> */}
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
