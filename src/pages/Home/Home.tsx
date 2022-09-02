import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { lighten } from 'polished';
import { StyledTitle } from '../../components/Layout/TextElements';
import BookForm from '../../components/BookForm';
import BooksList from '../../components/BooksList';
import { PrimaryButton } from '../../components/Layout/Buttons';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

const Wrapper = styled.div`
  width: 75%;
  height: 85%;
  margin: auto;
  margin-top: 50px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: 20px;
  box-shadow: -2px 2px 5px ${({ theme }) => lighten(0.5, theme.colors.black)},
  2px 2px 5px ${({ theme }) => lighten(0.5, theme.colors.black)};
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px; 
`
const Content = styled.div`
  overflow-y: scroll;
  padding-bottom: 1rem;

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    margin-block: 1rem;
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => lighten(0.5, theme.colors.black)};

    border-radius: 100vmax;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => lighten(0.3, theme.colors.black)};
  }
`

const Home: FC = () => {
  const [ showForm, setShowForm ] = useState<boolean>(false)

  const toggleForm = () => {
    setShowForm(state => !state)
  }

  return (
    <Container data-testid='dashboard'>
      <Wrapper>
        <Header>
          <StyledTitle>My Book's Collection</StyledTitle>
          <PrimaryButton success={!showForm} onClick={toggleForm}>{showForm ? 'Close' : 'Add'}</PrimaryButton>
        </Header>
        <Content>
          { showForm && <BookForm/> }
          <BooksList/>
        </Content>
      </Wrapper>
    </Container>
  )
};

export default Home;