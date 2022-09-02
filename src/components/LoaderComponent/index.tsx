import React, { FC } from 'react'
import styled, { keyframes } from 'styled-components'
import { lighten } from 'polished'
const Container = styled.div`
    z-index: 100;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;

    &::after {
        content: '';
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        opacity: 0.5;
        background-color: ${({ theme }) => theme.colors.grey1};
    }
`;

const loaderAnimation = keyframes`
    from {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }

    to {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
    }
`;

const Loader = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translateX(-5vmin) translateY(-5vmin);
    -ms-transform: translateX(-5vmin) translateY(-5vmin);
    transform: translateX(-5vmin) translateY(-5vmin);

    &::before,
    &::after {
        position: absolute;
        content: '';
        top: 0%;
        left: 50%;
        width: 10vmin;
        height: 10vmin;
        margin: 0em;
        border-radius: 100vmax;
        border: 0.2em solid ${({ theme }) => lighten(0.8, theme.colors.grey1)};
    }

    &::after {
        animation: ${loaderAnimation} 0.6s linear;
        animation-iteration-count: infinite;
        border-color: black transparent transparent;
        box-shadow: 0px 0px 0px 1px transparent;
    }
`;
const LoaderComponent: FC = () => {
  return (
    <Container>
        <Loader data-testid="loader"/>
    </Container>
  )
}

export default LoaderComponent;