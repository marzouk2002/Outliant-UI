import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';

export const StyledTextInput = styled(TextField)`
    width: 100%;

    .MuiInputBase-input,
    .MuiFormLabel-root {
        font-size: 1.5rem;
        padding: 0.6rem;
        font-weight: 300;
    }

    &.sm .MuiInputBase-input,
    &.sm .MuiFormLabel-root{
        font-size: 1rem;
        padding: 0.5rem;
    }

    .MuiFormLabel-root.MuiFormLabel-filled,
    .MuiFormLabel-root.Mui-focused {
        display: none;
    }

    .MuiInput-underline:after {
        border-bottom-color: ${({ theme }) => theme.colors.black};
    }
`;