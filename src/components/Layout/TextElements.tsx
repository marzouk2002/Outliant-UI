import styled from 'styled-components';
import { lighten } from 'polished';

export const StyledTitle = styled.h1`
    font-size: 2.2rem;
    font-weight: 700;
    margin-bottom: 0.7rem;
`;

export const StyledBookTitle = styled.h2`
    font-size: 1.3rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
    margin-left: 2rem;
    color: ${({ theme }) => lighten(0.2, theme.colors.black)};
`;

export const StyledText = styled.p`
    font-size: 1rem;
    font-weight: 400;
    color: ${({ theme }) => lighten(0.3, theme.colors.black)};
    margin-left: 2rem;
    margin-bottom: 0.4rem;

`;