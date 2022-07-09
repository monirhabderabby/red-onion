import "react-loading-skeleton/dist/skeleton.css";
import { useQuery } from "react-query";
import FoodCard from "../../../Shared/FoodCard";

const Breakfast = () => {
    const { data: foods, isLoading } = useQuery("breakfast", () =>
        fetch("breakfast.json").then((res) => res.json())
    );
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                {foods?.map((f) => (
                    <FoodCard key={f.id} food={f} isLoading={isLoading} />
                ))}
            </div>
        </div>
    );
};

export default Breakfast;
