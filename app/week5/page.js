

import Link from 'next/link';
import ItemList from './item-list';
import React from 'react';


//returns a main element wrapped around an h1 "Shopping List" header and the ItemList component.
export default function Page() {
    return <main className="bg-blue-200">
        
        <p>
            <Link href="/">Back to home</Link>
        </p>
        <h1 class="text-3xl m-2">Shopping List</h1>
        <ItemList />
        
    </main>;
}