import Image from 'next/image'
export default function Home() {
  return (
    <div  className='mb-40'>
      {/* <h1 >Hello</h1> */}

      <Image src='/cover.jpg' alt='Cover Photo' width={500} height={500} className='w-full h-96'/>

      <h1 className='text-2xl font-bold mt-4 px-4'>Server Side Renderring</h1>

      <p className='mt-5 px-4 text-lg'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus minus commodi amet. Nihil eaque fuga odio! Laborum blanditiis commodi deserunt assumenda ullam dignissimos adipisci facilis corporis accusamus, minima dolorem magni?</p>

      <button className='bg-red-700 text-white mx-4 mt-5 px-4 py-2'>Click me</button>
      





      {/* <h1 className="text-red-500 text-2xl text-center shadow shadow-red-700" >Hello Hamzah</h1>
      <h2>Hellos</h2> */}
    </div>
  )
}
