import { useQuery } from "react-query";
import FoodCard from "../../../Shared/FoodCard";

const Dinner = () => {
    const { data: foods, isLoading } = useQuery("dinner", () =>
        fetch("breakfast.json").then((res) => res.json())
    );
    // const [foods, setFoods] = useState([]);
    // useEffect(() => {
    //     fetch("breakfast.json")
    //         .then((res) => res.json())
    //         .then((data) => setFoods(data));
    // }, []);
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

export default Dinner;
