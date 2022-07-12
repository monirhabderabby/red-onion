import { NavLink, Outlet } from "react-router-dom";

const FoodItems = () => {
    return (
        <div className="bg-white">
            <div className="flex justify-center mt-32 mb-20">
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive
                            ? "text-primary mx-3 border-b-4 border-primary"
                            : "mx-3 hover:text-primary text-neutral"
                    }
                >
                    Breakfast
                </NavLink>
                <NavLink
                    to="lunch"
                    className={({ isActive }) =>
                        isActive
                            ? "text-primary mx-3 border-b-4 border-primary"
                            : "mx-3 hover:text-primary text-neutral"
                    }
                >
                    Lunch
                </NavLink>
                <NavLink
                    to="dinner"
                    className={({ isActive }) =>
                        isActive
                            ? "text-primary mx-3 border-b-4 border-primary"
                            : "mx-3 hover:text-primary text-neutral"
                    }
                >
                    Dinner
                </NavLink>
            </div>
            <Outlet />
        </div>
    );
};

export default FoodItems;
