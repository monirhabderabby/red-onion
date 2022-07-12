import Facilities from "../Facilities/Facilities";
import Footer from "../Footer/Footer";
import FoodItems from "./FoodItems/FoodItems";

const Home = () => {
    return (
        <div className="">
            <FoodItems />
            <Facilities></Facilities>
            <Footer></Footer>
        </div>
    );
};

export default Home;
