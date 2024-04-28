import AllCountry from "../components/AllCountry";
import Slider from "../components/Banner/Slider";
import TouristSpots from "../components/TouristSpots";



const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <div>
                <TouristSpots></TouristSpots>
            </div>
            <div>
                <AllCountry></AllCountry>
            </div>
        </div>
    );
};

export default Home;