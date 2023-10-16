"use client";


import { useState } from "react";

// Add a new prop { onAddItem }
//Replace the alert functionality by calling the onAddItem prop with the item object when the form is submitted. The item object should have the following properties: name, quantity, and category.
export default function NameForm({onAddItem}) {
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
        onAddItem({name, quantity, category});
        setName("");
        setQuantity("1");
        setCategory("produce");
    }




    return (

        <main className="bg-blue-200 p-2 m-2">
            <div class="max-w-sm w-full border-2 border-grey-200 rounded-lg p-4 m-2">
                <h2 class="text-3xl font-bold mb-4">Shopping List</h2>
                <h3 class="text-xl font-bold">Add New Items</h3>

                <form onSubmit={handleSubmit} className="w-full">                   
                        <div className="relative mb-6">
                            <label className="block text-black mb-2">
                            
                            <input type="text" placeholder="Item name" required value={name} onChange={handleChange} className="border-2 border-grey-200 rounded-lg pl-2 "/>
                            </label>
                        </div>
                        <div className="flex justify-between mb-5">
                            <div className="w-1/2 pr-2">
                                <label>
                                
                                <input type="number" placeholder="Enter your quantity" value={quantity} onChange={handleQuantityChange} className="w-9 border-2 border-grey-200 rounded-lg pl-2"/>
                                </label>
                            </div>
                            <div className="w-1/2 pr-2">
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
                            class="inline-block w-full rounded  px-6 pb-2 pt-2.5 text-m text-black bg-gray-400 hover:bg-gray-200 "
                            >
                            +
                            </button>
                        </div>

                </form>
            </div>
        </main>
    )
}





