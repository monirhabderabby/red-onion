import { Route, Routes } from "react-router-dom";
import "./App.css";
import Breakfast from "./Components/Pages/Home/FoodItems/Breakfast";
import Dinner from "./Components/Pages/Home/FoodItems/Dinner";
import Lunch from "./Components/Pages/Home/FoodItems/Lunch";
import Header from "./Components/Pages/Home/Header/Header";
import Home from "./Components/Pages/Home/Home";

function App() {
    return (
        <div className="App">
            <Header></Header>
            <Routes>
                <Route path="/" element={<Home />}>
                    <Route path="breakfast" element={<Breakfast />}></Route>
                    <Route path="lunch" element={<Lunch />}></Route>
                    <Route path="dinner" element={<Dinner />}></Route>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
