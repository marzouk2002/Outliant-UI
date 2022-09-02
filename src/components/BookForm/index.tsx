import React, { FC, FormEvent, useState } from 'react'
import styled from 'styled-components';
import { lighten } from 'polished';
import { SecondaryButton } from '../Layout/Buttons';
import { StyledTextInput } from '../Layout/Inputs';
import { useAppDispatch } from '../../redux/hooks';
import { addBook, setApiLoading } from '../../redux/app/appSlice';
import { API_URL } from '../../constants/api';
import axios from 'axios';

const Container = styled.form`
    margin-bottom: 20px;
    padding: 0 20px;

    & > button {
        width 100%;
        background: ${({ theme }) => theme.colors.black};
        color: ${({ theme }) => lighten(0.9, theme.colors.black)};
        margin: 15px 0;
        font-size: 1rem;
        transition: letter-spacing 300ms;

        &:hover {
            color: ${({ theme }) => lighten(0.9, theme.colors.black)};
            letter-spacing: 1px;
        }
    }
`;

const BookForm: FC = () => {
    const defaultFormValues = {
        title: '',
        author_name: '',
        publication_year: 2022,
        num_pages: 0,
        isbn: ''
    }
    const [ formState, setFormState ] = useState(defaultFormValues)
    const dispatch = useAppDispatch()

    const handleFormChange = (e: FormEvent) => {
        const target = e.target as HTMLInputElement
        setFormState(state => ({
            ...state,
            [target.name]: target.value 
        }))
    }

    const submitNewBook = async (e: FormEvent) => {
        try {
            e.preventDefault()
            dispatch(setApiLoading(true))
            const res = await axios.post(`${API_URL}/books`, {book: formState})
            if(res.status === 201) {
                dispatch(addBook(formState))
            }
        } catch(err) {
            alert('Sorry, something bad happened!')
        }
        dispatch(setApiLoading(false))
        setFormState(defaultFormValues)
    }

    return (
        <Container onSubmit={submitNewBook}>
            <StyledTextInput label="Title" onChange={handleFormChange} name='title' value={formState.title} required={true}/>
            <StyledTextInput label="Author Name" onChange={handleFormChange} name='author_name' value={formState.author_name} required={true}/>
            <StyledTextInput label="Publication year" onChange={handleFormChange} name='publication_year' value={formState.publication_year} required={true} type="number" InputProps={{ inputProps: { min: -5000, max: 2022, step: 1 } }}/>
            <StyledTextInput label="Number of Pages" onChange={handleFormChange} name='num_pages' value={formState.num_pages} required={true} type="number" InputProps={{ inputProps: { min: 0, step: 1 } }}/>
            <StyledTextInput label="ISBN" onChange={handleFormChange} name='isbn' value={formState.isbn} required={true}/>
            <SecondaryButton type='submit'>Add Book to Collection</SecondaryButton>
        </Container>
    )
}

export default BookForm;