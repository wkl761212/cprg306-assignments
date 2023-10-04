import Link from 'next/link';
import NewItem from './new-item';

export default function Page() {
    return <main className="bg-gray-400">
        
        <p>
            <Link href="/">Back to home</Link>
        </p>
        
        <NewItem />
    </main>;
}
    
