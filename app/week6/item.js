import { useState } from "react";

export default function Item({name, quantity, category}) {
    return (
        <>
        <div className="border border-sky-500 bg-yellow-100 w-full max-w-xs m-4 p-2 rounded">
            <li className="flex justify-between">
                <p class="text-2xl font-bold">{name}</p>                                
            </li>
            <li>
                <p>Buy {quantity} in {category}</p>
            </li>
        </div>
        </>
    );
};




