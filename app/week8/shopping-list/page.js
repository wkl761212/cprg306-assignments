"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import NewItem from './new-item';
import ItemList from './item-list';
import itemsData from './items.json';
import MealIdeas from './meal-ideas';

export default function Page() {
    const [items, setItems] = useState(itemsData);
    const [selectedItemName, setSelectedItemName] = useState('');

    const handleAddItem = (newItem) => {
        setItems([...items, newItem]);
    }

    const handleItemSelect = (name) => {
        const cleanedName = name.split(",", 1)[0].trim();
        const clearedName = cleanedName.replace(/[^a-zA-Z ]/g, "").trim();  // Use `const` to define the new variable clearedName
        setSelectedItemName(clearedName);  // Use the correct variable name
    }
    
    
    return (
        <main className="bg-blue-200">
            <p>
                <Link href="/">Back to home</Link>
            </p>
        
            <div className='flex' >
                <div className='flex-1'>
                    <NewItem onAddItem={(onAddItem => handleAddItem(onAddItem))} />
                    <ItemList items={items} onItemSelect={selectedItemName => handleItemSelect(selectedItemName)} /> {/* Renamed onItemClick to onItemSelect for consistency */}
                </div>
                <div className='flex-1'>
                    <MealIdeas ingredient={selectedItemName} />
                </div>
            </div>
        </main>
    );
}
