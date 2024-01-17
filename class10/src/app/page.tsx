import { Suspense } from 'react';
import Books from './books';
export default async function Home() {

  return (
    <div>
      <h1>Streaming</h1>
      <Suspense>
        <Books />
      </Suspense>
    </div>
  )
}