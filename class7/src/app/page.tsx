'use client'
import { useState, useEffect } from "react"
import Props from "./prop"
export default function Home() {
  let [count, setCount] = useState(0)
  let increment = () => {
    setCount(count + 1)
  }
  useEffect(() => {
    console.log("useeffect after component render");
  }, [count])
  return (
    <main>
      <button onClick={increment} className="bg-blue-500 py-4 px-6 rounded">Increment</button>
      <Props count={count} />
    </main>
  )
}