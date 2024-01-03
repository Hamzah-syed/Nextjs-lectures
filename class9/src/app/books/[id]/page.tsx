import { url } from '@/constants/index'


interface IProps {
    params: {
        id: string
    }

}


interface IBook {
    id: number,
    name: string,
    author: string,
    type: string,
    price: number,
    'current-stock': number,
    available: boolean
}
const BookPage = async ({ params }: IProps) => {

    const response = await fetch(`${url}/books/${Number(params.id)}`);
    const book: IBook = await response.json();


    return (
        <div>
            <h1>Book Details</h1>
            <h2>Book id is {params.id}</h2>
            <h2>Book name is {book.name}</h2>
            <h2>Book author is {book.author}</h2>
            <h2>Book type is {book.type}</h2>
            <h2>Book price is {book.price}</h2>
        </div>
    )
}

export default BookPage;