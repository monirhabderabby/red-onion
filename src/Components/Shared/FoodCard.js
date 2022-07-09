import Skeleton from "react-loading-skeleton";

const FoodCard = ({ food, isLoading }) => {
    return (
        <div className="flex flex-col justify-center sm:max-w-sm md:max-w-md mx-auto p-6 hover:shadow-2xl transition duration-500 rounded-sm">
            <img
                src={food?.image}
                alt="food"
                className="rounded-full h-[200px] w-[200px]"
            />
            <p>{isLoading ? <Skeleton /> : food?.name}</p>
            <p className="font-sm">
                {isLoading ? <Skeleton /> : food?.description.slice(0, 25)}
            </p>
            <p className="mt-1">${food?.price}</p>
        </div>
    );
};

export default FoodCard;
