import { useNavigate } from "react-router-dom";
import LoadSpinner from "../Pages/Home/Login/LoadSpinner/LoadSpinner";

const FoodCard = ({ food, isLoading }) => {
    const navigate = useNavigate();

    const handleDetails = () => {
        console.log(food.id);
        navigate(`/foodDetails/${food.id}`);
    }

    return (
        <>
            {isLoading ? (
                <LoadSpinner />
            ) : (
                <div onClick={handleDetails} className="flex flex-col justify-center sm:max-w-sm md:max-w-md mx-auto p-6 hover:shadow-2xl transition duration-500 rounded-sm">
                    <img
                        src={food?.image}
                        alt="food"
                        className="rounded-full h-[200px] w-[200px]"
                    />
                    <p>{food?.name}</p>
                    <p className="font-sm">{food?.description.slice(0, 25)}</p>
                    <p className="mt-1">${food?.price}</p>
                </div>
            )}
        </>
    );
};

export default FoodCard;
