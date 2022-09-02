import { Clear } from '@material-ui/icons';
import axios from 'axios';
import React, { FC } from 'react'
import styled from 'styled-components';
import { API_URL } from '../../constants/api';
import { Book } from '../../redux/app/app.types';
import { removeBook, setApiLoading } from '../../redux/app/appSlice';
import { useAppDispatch } from '../../redux/hooks';
import { SecondaryButton } from '../Layout/Buttons';
import { StyledBookTitle, StyledText } from '../Layout/TextElements';


const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: start;
    margin-bottom: 10px; 
`;

interface BookCardProps {
    book: Book
}

const BookCard: FC<BookCardProps> = ({ book }) => {
    const { title, author_name, publication_year, isbn, num_pages } = book

    const dispatch = useAppDispatch()

    const deleteBook = async (isbn: string) => {
        try {
            dispatch(setApiLoading(true))
            const res = await axios.delete(`${API_URL}/books/${isbn}`)

            if(res.status === 200) {
                dispatch(removeBook(isbn))
            }
        } catch (err) {
            alert('Sorry, something bad happened!')
        }
        dispatch(setApiLoading(false))
    }

    return (
        <Container>
            <div>
                <StyledBookTitle className='lg mb'>Title: {title}</StyledBookTitle>
                <StyledText className='mb'>Author: {author_name}</StyledText>
                <StyledText className='mb'>Publication year: {publication_year}</StyledText>
                <StyledText className='mb'>Number of Pages: {num_pages}</StyledText>
                <StyledText className='mb'>ISBN: {isbn}</StyledText>
            </div>
            <SecondaryButton onClick={() => deleteBook(isbn)}>
                <Clear/>
            </SecondaryButton>
        </Container>
    )
}

export default BookCard;