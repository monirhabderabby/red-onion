import { Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
    return (
        <div className="App">
            <Header></Header>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
=======
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
