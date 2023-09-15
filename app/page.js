import Link from 'next/link'
import StudentInfo from './StudentInfo/page';
export default function Home() {
  return (
    <main >
      <h1 className='text-green-800 text-5xl m-4'>CPRG 306: Web Development 2 - Assignments</h1>
      <Link href="/week2">Week 2</Link>
      <StudentInfo />
    </main>
  )
}
