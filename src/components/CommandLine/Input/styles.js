import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    margin: 4px 0 4px 0;
`;

export const InputBox = styled.input`
    @import url('https://fonts.googleapis.com/css?family=Anonymous+Pro&display=swap');
    font-family: "Anonymous Pro", monospace;
    flex: 1;
    background: transparent;
    border: none;
    outline: none;
    text-shadow: 0 0 0 cyan;
    font-size: 1em;
    color: transparent;
    cursor: default;
`;

export const Arrow = styled.p`
    color: lightgreen;
`;

const blink = keyframes`
    to{visibility: hidden}
`;

export const Separator = styled.div`
    margin: 0 6px 0 6px;
    color: cyan;
    user-select: none;
    animation: ${blink} 1s steps(2, start) infinite;
`;