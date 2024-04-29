import AllCountry from "../components/AllCountry";
import Slider from "../components/Banner/Slider";
import GetUpdate from "../components/GetUpdate";
import Team from "../components/Team";
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
            <div>
                <Team></Team>
            </div>
            <div>
                <GetUpdate></GetUpdate>
            </div>
        </div>
    );
};

export default Home;