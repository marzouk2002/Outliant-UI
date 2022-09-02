import styled from 'styled-components';
import { lighten } from 'polished';

export const PrimaryButton = styled.button<{ success: boolean }>`
    border: none;
    cursor: pointer;
    color: #fff;
    transform: scale(1.2);
    transition: transform 300ms;
    padding: 10px 20px;
    border-radius: 5px;
    background-color: ${({ success, theme}) => success ? theme.colors.green : theme.colors.red};

    &:hover {
        transform: scale(1.3);
    }
`;

export const SecondaryButton = styled.button`
    border: none;
    cursor: pointer;
    color: ${({ theme }) => lighten(0.5, theme.colors.black)};
    padding: 10px 20px;
    border-radius: 5px;
    background-color: transparent;

    &:hover {
        color: ${({ theme }) => theme.colors.black};
    }
`;