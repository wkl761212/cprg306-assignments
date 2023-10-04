"use client";
 
import { useState } from "react";
 
/*
    Initialize State Variables
Name Field

Use the useState hook to create a state variable called name and a setter function called setName.
The initial value of name should be an empty string (""), indicating that the name field is initially blank.
Quantity Field

Use the useState hook to create a state variable called quantity and a setter function called setQuantity.
The initial value of quantity should be 1, indicating that the quantity field is initially set to 1.
Category Field

Use the useState hook to create a state variable called category and a setter function called setCategory.
The initial value of category should be "produce", indicating that the category field is initially set to "Produce".
Create a Form Submission Handler
Create a handleSubmit function. This function should:

Prevent the form's default submission behavior.
Create an item object with the current values of name, quantity, and category.
Log the item object to the console.
Display an alert with the current state of name, quantity, and category.
Reset the state variables to their initial values.
Render the Component
In the return statement of your function, create a form that includes:

Name Field

Create an input field of type text.
The value of the input field should be tied to the name state variable, meaning that it displays the current value of name.
Use the setName function in an onChange event handler to update the state of name as the user types into the field.
Add required attribute to the input field to ensure that the user cannot submit the form without providing a name.
Quantity Field

Create an input field of type number.
Set the min attribute to "1" and the max attribute to "99" to limit the range of valid quantities.
The value of the input field should be tied to the quantity state variable.
Use the setQuantity function in an onChange event handler to update the state of quantity as the user types into the field. Make sure to convert the input to a Number before setting the state.
Add required attribute to the input field to ensure that the user cannot submit the form without providing a quantity.
Category Field

Create a select element for the category.
The value of the select element should be tied to the category state variable.
Use the setCategory function in an onChange event handler to update the state of category as the user selects a different option.
Create various option elements within the select for each possible category ("Produce", "Dairy", "Bakery", "Meat", "Frozen Foods", "Canned Goods", "Dry Goods", "Beverages", "Snacks", "Household", "Other"). Each option should have a value that matches the category it represents.
Submit Button

Create a submit button that triggers the handleSubmit function when clicked.


*/









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
                            
                            <input type="text" placeholder="Item name" value={name} onChange={handleChange} className="border-2 border-grey-200 rounded-lg pl-2 "/>
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





