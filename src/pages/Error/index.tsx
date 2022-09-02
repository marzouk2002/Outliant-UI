import { FC } from 'react'
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const StyledTitle = styled.h1`
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.black};
`;
const ErrorPage: FC = () => {
  return (
    <Container data-testid="errorPage">
        <StyledTitle>404 | Page Not Found</StyledTitle>
    </Container>
  )
}


export default ErrorPage;