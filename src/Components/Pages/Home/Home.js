import Facilities from "../Facilities/Facilities";
import Footer from "../Footer/Footer";
import FoodItems from "./FoodItems/FoodItems";
import Header from "./Header/Header";

const Home = () => {
    return (
        <div className="">
            <Header />
            <FoodItems />
            <Facilities></Facilities>
            <Footer></Footer>
        </div>
    );
};

export default Home;
