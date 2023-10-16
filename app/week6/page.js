"use client";
import Link from 'next/link';
import React from 'react';
import NewItem from './new-item';
import ItemList from './item-list';
import itemsData from './items.json';



//In your render function, display both the NewItem and ItemList components.


export default function Page() {
    const [items, setItems] = React.useState(itemsData);
    const handleAddItem = (newItem) => {
        setItems([...items, newItem]);
    }
    
    return <main className="bg-blue-200">

        <p>
            <Link href="/">Back to home</Link>
        </p>
        
        
        <NewItem onAddItem={handleAddItem}/>
        <ItemList items={items} />
 
    </main>;
}