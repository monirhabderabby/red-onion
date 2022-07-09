import { Route, Routes } from "react-router-dom";
import "./App.css";
import Breakfast from "./Components/Pages/Home/FoodItems/Breakfast";
import Dinner from "./Components/Pages/Home/FoodItems/Dinner";
import Lunch from "./Components/Pages/Home/FoodItems/Lunch";
import Home from "./Components/Pages/Home/Home";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />}>
                    <Route index element={<Breakfast />} />
                    <Route path="lunch" element={<Lunch />}></Route>
                    <Route path="dinner" element={<Dinner />}></Route>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
