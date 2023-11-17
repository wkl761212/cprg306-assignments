'use client';
import { useUserAuth } from './_utils/auth-context';
import Link from "next/link";

function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  function handleSignIn() {
    gitHubSignIn();
  }
  function handleSignOut() {
    firebaseSignOut();
  }

  return (

    <div>
      <div>
        <h1 className='font-bold text-3xl m-5'>Shopping List App</h1>
      {!user && <button onClick={handleSignIn}>Sign In With Github</button>}
      </div>
      
      {user && (
        <div>
          <p>Signed in as <strong>{user.displayName}</strong> ({user.email})</p>
          <Link href="/week10/shopping-list">
            <p className='border border-sky-500 hover:bg-sky-500 bg-yellow-100 w-full max-w-xs m-4 p-2 rounded text-center'>Continue to the shopping list</p>
          </Link>
          <button onClick={handleSignOut}>Sign Out</button>
          <p>
            <Link href="/">Back to home</Link>
          </p>
        </div>
      )}
    </div>
    
    
  
  );
}
export default Page;
