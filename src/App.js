import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Components/Pages/Home/Login/Login/Login";
import SignUp from "./Components/Pages/Home/Login/SignUp/SignUp";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
            </Routes>
        </div>
    );
}

export default App;
