import Link from 'next/link';
import StudentInfo from '../StudentInfo/page';

export default function Page() {
    return <main>
        <h1>My Shopping List</h1>
        <p>
            <Link href="/">Back to home</Link>
        </p>
        
        <StudentInfo />
    </main>;
}