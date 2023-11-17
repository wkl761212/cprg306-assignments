"use client";
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import NewItem from './new-item';
import ItemList from './item-list';
import MealIdeas from './meal-ideas';
import {getItems, addItem} from '../_services/shopping-list-service';
import { useUserAuth } from '../_utils/auth-context';

export default function Page() {
    const [items, setItems] = useState([]);
    const [selectedItemName, setSelectedItemName] = useState('');
    const { user } = useUserAuth();

    const handleAddItem = async (newItem) => {
        if (!user || !user.uid) {
            console.error("User or User ID is undefined");
            return; // Exit the function if user or user.uid is undefined
        }
        const id = await addItem(user.uid, newItem); // Add the item
        setItems([...items, { ...newItem, id }]); // Add new item with ID to state
    }
    

    const handleItemSelect = (name) => {
        const cleanedName = name.split(",", 1)[0].trim();
        const clearedName = cleanedName.replace(/[^a-zA-Z ]/g, "").trim();  // Use `const` to define the new variable clearedName
        setSelectedItemName(clearedName); 
    }
//Create an async function loadItems. Inside this function, call the getItems function to get the shopping list items for the current user using user.uid as the userId. Use setItems to set the state of items to the result of getItems.
    const loadItems = async () => {
        if (user?.uid) { // Check if user.uid is available
            const items = await getItems(user.uid);
            setItems(items);
        }
    }
    useEffect(() => {
        if (user ) {
            loadItems();
        }
        
    }, [user?.uid]);
    
    
    return (
        <main className="bg-blue-200">
            <p>
                <Link href="/">Back to home</Link>
            </p>
        
            <div className='flex' >
                <div className='flex-1'>
                    <NewItem onAddItem={handleAddItem} />
                    <ItemList items={items} onItemSelect={handleItemSelect} /> 
                </div>
                <div className='flex-1'>
                    <MealIdeas ingredient={selectedItemName} />
                </div>
            </div>
        </main>
    );
    
}
