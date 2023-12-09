import Image from "next/image"
import logo from "../../public/logo.jpg"

const menu = [
  {
    title: "Biryani",
    description: "Mazedar beef nalli biryani with extra masala and chatni",
    price: 500,
    colddrink: true,
    image: "/biryani.jpg"
  },
  {
    title: "Tikka",
    description: "Mazedar beef nalli biryani with extra masala and chatni",
    price: 500,
    colddrink: true,
    image: "/biryani.jpg"
  },
  {
    title: "Malai Boti",
    description: "Mazedar beef nalli biryani with extra masala and chatni",
    price: 500,
    colddrink: true,
    image: "/biryani.jpg"
  },
  {
    title: "Bihari Kabab",
    description: "Mazedar beef nalli biryani with extra masala and chatni",
    price: 500,
    colddrink: true,
    image: "/biryani.jpg"
  },
  {
    title: "Fish and Chips",
    description: "Mazedar beef nalli biryani with extra masala and chatni",
    price: 500,
    colddrink: true,
    image: "/biryani.jpg"
  },
]

export default function Home() {
  return (
    <div>
      {/* <ul className="flex flex-row-reverse gap-x-2">
        {
          users.map((abc, i) => {
            return (
              <li key={i} className="bg-gray-100 py-3 px-5 border flex-1"> {abc}
              </li>
            )
          })
        }
      </ul> */}


      {/* <ul className="grid grid-cols-12 ">
        <li className="bg-gray-200 border col-span-3 border-red-400">Hamzah</li>

        <li className="bg-gray-200 border border-red-400 col-span-6">Ali</li>

        <li className="bg-gray-200 border border-red-400 col-span-4">Arham</li>
      </ul> */}

      {/* <div>
        <ul className="grid grid-cols-12 h-96 rounded-2xl">
          <li className="bg-pink-600 border border-white col-span-3 text-white font-bold px-6 py-4">Teachers</li>
          <li className="bg-white border border-white col-span-9 text-black font-bold px-6 py-4">Students</li>
        </ul>
      </div> */}


      {/* <div className="grid grid-cols-12 text-2xl font-bold h-screen rounded-2xl ">
        <div className="bg-red-400 col-span-4 p-4"> Side Bar</div>
        <div className="col-span-8 p-4"> Main Content</div>
      </div> */}






      {/* <ul className="grid grid-cols-3 ">
        <li className=" text-white bg-red-800 h-screen  px-5 border rounded">SideBar

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium fuga doloribus in vero sint! Aliquid voluptas cumque nostrum maxime unde!</p>
        </li>
        <li className="col-span-2 px-5 border rounded bg-zinc-500">NavBar
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium fuga doloribus in vero sint! Aliquid voluptas cumque nostrum maxime unde!</p>
        </li>
      </ul> */}


      {/* <div className="grid  grid-cols-12 grid-rows-5 gap-4"> */}
      {/*  Top Bar */}
      {/* <div className="col-span-12 h-20 bg-gray-200 row-span-1">
          Xeemax
        </div> */}

      {/* Sidebar */}
      {/* <div className="row-span-3 col-span-3 bg-gray-300">
          <ul>
            <li>Hello world</li>
            <li>Hello world</li>
            <li>Hello world</li>
            <li>Hello world</li>
          </ul>
        </div> */}

      {/* Content */}
      {/* <div className="row-span-3 col-span-9 bg-gray-400">

          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio soluta, eos incidunt fugiat voluptas atque dolore repudiandae corporis accusantium quis at pariatur similique deleniti! Delectus, maiores exercitationem. Reiciendis, impedit consequuntur?
        </div> */}

      {/* Footer */}
      {/* <div className="col-span-12 row-span-1 bg-gray-500">
          Xeemax
        </div>

      </div> */}


      {/* <h1 className="text-lg lg:text-4xl text-red-500 lg:text-blue-500 font-bold ">Hello World, How Are you?</h1> */}

      <div className="flex justify-center">
        <div className="w-[90%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {
            menu.map((item) => {
              return (
                <div className=" border rounded-md p-5 shadow-2xl">
                  <Image src={item.image} alt={item.title} width={400} height={400} className="w-full h-[150px] object-cover rounded-md" />
                  <div className="mt-5">
                    <p>{item.title}</p>
                    <p>{item.description}</p>
                    <p>{item.price}</p>
                    <p>Cold Drink : {item.colddrink ? "Pepsi" : "Water"}</p>
                  </div>
                </div>
              )
            })
          }

        </div>
      </div>


      
    </div>

  )
}
