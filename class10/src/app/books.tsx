interface Books {
    id: number,
    name: string,
    type: string,
    available: boolean
}

const Books = async () => {

    const res = await fetch('https://simple-books-api.glitch.me/books', {
        cache: 'no-store'
    })
    const data: Books[] = await res.json();

    return (
        <div>
            <h1>Books</h1>

            {
                data.map((item) => {
                    return (
                        <div key={item.id}>
                            <h2>{item.name}</h2>
                        </div>
                    )
                })
            }

        </div>
    )
}

export default Books;