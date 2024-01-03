import { client } from "@/../sanity/lib/client"

export default async function Home() {

  const data = await client.fetch(`*[_type == "pet"]{
    petName,
    _id
  }`) 



  return (
    <main>
{data[0].petName}
    </main>
  )
}