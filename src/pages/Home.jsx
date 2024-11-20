import Banner from "../components/home/Banner";
import Faq from "../components/home/Faq";
import FeaturedProduct from "../components/home/FeaturedProduct";
import Testimonial from "../components/home/Testimonial";

const Home = () => {
    return (
        <div>
            {/* <Slider/> */}
            <Banner/>
            <div className="my-3 py-6">
                <h2 className="text-2xl text-center font-bold">Featured Product</h2>
                <p className="font-medium text-md p-2 m-2 text-center">Welcome to Globalbazar. here you saw our featured product. </p>
                <div>
                    <FeaturedProduct/>
                </div> 
            </div>
            <div>
                <Testimonial/>
            </div>
            <div className="">
                <Faq/>
            </div>
        </div>
    );
};

export default Home;