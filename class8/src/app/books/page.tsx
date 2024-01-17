import { url } from "@/constants";
import Link from "next/link";




interface IBook {
    id: number,
    name: string,
    available: boolean,
    type: string,
}

const BooksPage = async () => {
    const response = await fetch(`${url}/books`, {
        cache: "force-cache"
    });
    const books: IBook[] = await response.json();
    return (
        <div>
            <h1 className="text-2xl font-semibold text-gray-950">Books</h1>
            <div>
                {
                    books.map((book) => {
                        return (
                            <Link key={book.id} href={`/books/${book.id}`}>
                                <div key={book.id}>
                                    <h2>{book.name}</h2>
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )

}

export default BooksPage;
