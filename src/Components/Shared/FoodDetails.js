import { useState } from "react";
import { useQuery } from "react-query";
import { useParams } from 'react-router-dom';
import LoadSpinner from "../Pages/Home/Login/LoadSpinner/LoadSpinner";

const FoodDetails = () => {
    const { id } = useParams();
    const [quantity, setQuantity] = useState(1);

    const { data: foods, isLoading } = useQuery("breakfast", () =>
        fetch("breakfast.json").then((res) => res.json())
    );

    if (isLoading) {
        return <LoadSpinner></LoadSpinner>;
    };

    const selectedFood = foods.find(food => parseInt(food.id) === parseInt(id))

    return (
        <div class="hero min-h-screen">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={selectedFood.image} class="max-w-lg rounded-lg shadow-2xl" alt="" />
                <div className="text-left lg:mx-20">
                    <h1 class="text-5xl font-bold">{selectedFood.name}</h1>
                    <p class="py-6">{selectedFood.description}</p>
                    <div className="flex items-center mb-4">
                        <h2 className="text-4xl font-semibold">${selectedFood.price}</h2>
                        <div className="ml-14 rounded-2xl border flex justify-center items-center">
                            <button
                                onClick={() => setQuantity(quantity - 1)}
                                className="px-2 py-1 btn btn-ghost text-xl font-medium"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                                </svg>
                            </button>
                            <p className="px-2 py-1 text-2xl">{quantity}</p>
                            <button
                                onClick={() => setQuantity(quantity + 1)}
                                className="px-2 py-1 btn btn-ghost text-xl font-medium"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <button class="btn btn-primary rounded-full px-8 text-sm font-medium">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        Add
                    </button>
                    <div className="mt-8">
                        <div class="avatar mr-8">
                            <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={selectedFood.image} alt="" />
                            </div>
                        </div>
                        <div class="avatar mr-8">
                            <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={selectedFood.image} alt="" />
                            </div>
                        </div>
                        <div class="avatar">
                            <div class="w-16 rounded">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodDetails;