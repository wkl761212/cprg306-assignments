import Link from 'next/link';
import ItemList from './item-list';

export default function Page() {
    return <main className="bg-gray-400">
        <h1 className="text-4xl font-bold m-6 text-center text-gray-700 ">
        Shopping list
        </h1>
        <p>
            <Link href="/">Back to home</Link>
        </p>
        
        <ItemList />
        
    </main>;
}