import { FC } from 'react'
import { Book } from '../../redux/app/app.types'
import { selectBooks } from '../../redux/app/appSlice'
import { useAppSelector } from '../../redux/hooks'
import BookCard from '../BookCard'


const BooksList: FC = () => {
    const books: Book[] = useAppSelector(selectBooks)

    return (
        <div>
            {
                books.map(book => <BookCard key={book.isbn} book={book}/>)
            }
        </div>
    )
}

export default BooksList