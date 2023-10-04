"use client";
 
import { useState } from "react";

export default function NameForm() {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState("1");
    const [category, setCategory] = useState("produce");

    const handleChange = (event) => {
        setName(event.target.value.toUpperCase());
    }
    const handleQuantityChange = (event) => {
        setQuantity(event.target.value.toUpperCase());
    }
    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Submitting ${name} ${quantity} ${category}`);
    }

    return (
        <div className="bg-blue-200 min-h-screen flex flex-col items-center pt-10">
            <div class="flex flex-col justify-center items-center rounded-lg p-6 bg-white w-1/3">
                <form onSubmit={handleSubmit} className="w-full">                   
                        <div className="relative mb-6">
                            <label className="block text-black mb-2">
                            
                            <input type="text" placeholder="Item name" required value={name} onChange={handleChange} className="border-2 border-grey-200 rounded-lg pl-2 "/>
                            </label>
                        </div>
                        <div className="flex justify-between mb-4">
                            <div className="w-1/2 pr-2">
                                <label>
                                
                                <input type="number" placeholder="Enter your quantity" value={quantity} onChange={handleQuantityChange} className="border-2 border-grey-200 rounded-lg pl-2"/>
                                </label>
                            </div>
                            <div className="w-1/3 pr-2">
                                <label>                                   
                                    <select value={category} onChange={handleCategoryChange} className="border-2 border-grey-200 rounded-lg">
                                        <option value="" disabled>Category</option>
                                        <option value="produce">Produce</option>
                                        <option value="dairy">Dairy</option>
                                        <option value="bakery">Bakery</option>
                                        <option value="meat">Meat</option>
                                        <option value="frozen foods">Frozen Foods</option>
                                        <option value="canned goods">Canned Goods</option>
                                        <option value="dry goods">Dry Goods</option>
                                        <option value="beverages">Beverages</option>
                                        <option value="snacks">Snacks</option>
                                        <option value="household">Household</option>
                                        <option value="other">Other</option>
                                    </select>
                                </label>
                            </div>
                        </div>

                    
                        <div>
                            <button
                            type="submit"
                            class="inline-block w-full rounded  px-6 pb-2 pt-2.5 text-xs font-medium uppercase l text-black bg-gray-400 hover:bg-gray-200 focus:outline-none"
                            data-te-ripple-init
                            data-te-ripple-color="light">
                            +
                            </button>
                        </div>
                </form>
            </div>
        </div>
    )
}





