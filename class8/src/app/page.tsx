'use client';
import Link from "next/link";
import { useRouter } from "next/navigation";


export default function Home() {

  const { push } = useRouter();

  const isLoggedIn = true;

  const handleRedirect = () => {
    if (isLoggedIn) {
      // Redirect to /dashboard
      push('/dashboard');
    } else {
      // Redirect to /login
      push('/login');
    }
  }

  return (
    <main>
      <button onClick={handleRedirect}>
        Dashboard
      </button>
    </main>
  )
}