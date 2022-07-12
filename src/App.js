import { Route, Routes } from "react-router-dom";
import "./App.css";
import Breakfast from "./Components/Pages/Home/FoodItems/Breakfast";
import Dinner from "./Components/Pages/Home/FoodItems/Dinner";
import Lunch from "./Components/Pages/Home/FoodItems/Lunch";
import Header from "./Components/Pages/Home/Header/Header";
import Home from "./Components/Pages/Home/Home";
import Login from "./Components/Pages/Home/Login/Login/Login";
import SignUp from "./Components/Pages/Home/Login/SignUp/SignUp";
import Contact from "./Components/Pages/Shopping/Contact";
import Shopping from './Components/Pages/Shopping/Shopping'

function App() {
    return (
        <div className="App">
            <Header></Header>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/shopping" element={<Shopping></Shopping>}></Route>
                <Route path="/contact" element={<Contact></Contact>}></Route>
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
