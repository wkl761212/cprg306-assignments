"use client";
import Item from './item';
import { useState } from "react";

//Replace all functions that mutate the items prop with versions that do not mutate the prop. Instead, these functions should create a copy of items, perform any necessary operations on the copy, and use this copy for rendering.

export default function ItemList({items}) {
    const [sortBy, setSortBy] = useState("name");
    const [groupBy, setGroupBy] = useState(null);

    const handleSortByName = () => {
        setSortBy("name");
        setGroupBy(null);
    }
    const handleSortByCategory = () => {
        setSortBy("category");
        setGroupBy(null);
    }
    
    const handleGroupCategory = () => {
        setGroupBy("category");
        setSortBy(null);
    }


    items.sort((a, b) => {
        if (sortBy == "name") {
            return a.name.localeCompare(b.name);
        }else if (sortBy == "category") {
            return a.category.localeCompare(b.category);
        }
    });

    const groupedItems = {};

    for (let item of items) {
        if (!groupedItems[item.category]) {
            groupedItems[item.category] = [];
        }
        groupedItems[item.category].push(item);


    }
    

    return (
        <main>
            <div>
                <label for="sort">Sort By:   </label>
                <button onClick={handleSortByName} className={sortBy == "name" ? "bg-gray-400 text-white font-bold py-2 px-4 border rounded p-1 m-2" : "bg-gray-200 bg-gray-400 font-bold py-2 px-4 border rounded p-1 m-2"}>Name</button>
                <button onClick={handleSortByCategory} className={sortBy == "category" ? "bg-gray-400 text-white font-bold py-2 px-4 border rounded p-1 m-2" : "bg-gray-200 bg-gray-400 font-bold py-2 px-4 border rounded p-1 m-2"}>Category</button>
                <button onClick={handleGroupCategory} className={groupBy == "category" ? "bg-gray-400 text-white font-bold py-2 px-4 border rounded p-1 m-2" : "bg-gray-200 bg-gray-400 font-bold py-2 px-4 border first-letter:rounded p-1 m-2"}>Group Category</button>
            </div>
            

            <ul>
                {groupBy == "category" ? (
                    Object.keys(groupedItems).map(category => (
                        <li key={category}>
                            <h2>{category}</h2>
                            {groupedItems[category].map(item => (
                                <Item
                                    key={item.id}
                                    name={item.name}
                                    quantity={item.quantity}
                                    category={item.category}
                                />
                            ))}
                        </li>
                    ))
                ) : (
                    items.map(item => (
                        <Item
                            key={item.id}
                            name={item.name}
                            quantity={item.quantity}
                            category={item.category}
                        />
                    ))
                )}
            </ul>
        </main>            
    );

}