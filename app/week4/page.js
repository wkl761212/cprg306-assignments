import Link from 'next/link';
import NewItem from './new-item';

//Edit page.js to be a Next.js page component that renders the NewItem component.
export default function Page() {
    return <main className="bg-gray-400">
        
        <p>
            <Link href="/">Back to home</Link>
        </p>
        
        <NewItem />
    </main>;
}
    
