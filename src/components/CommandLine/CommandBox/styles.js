import styled from 'styled-components';
import { Primary, Secondary } from '../../../utils/colors';

export const Container = styled.div`
    height: calc(${props => props.height} - 36px);
    overflow-y: scroll;
    background-color: ${Primary()};
    border-radius: 0 0 8px 8px;
    box-shadow: 0 0 10px #111;
    padding: 20px;
    
    &::-webkit-scrollbar{
        width: 10px;
    }

    &::-webkit-scrollbar-track{
        background-color: ${Primary('dark')}
    }

    &::-webkit-scrollbar-thumb{
        background-color: ${Primary('light')}
    }

    &::-webkit-scrollbar-thumb:hover{
        background-color: ${Secondary()}
    }
`;

export const Line = styled.p`
    @import url('https://fonts.googleapis.com/css?family=Anonymous+Pro&display=swap');
    color: #b7c5d2;
    font-family: "Anonymous Pro", monospace;
    padding: 10px 0;
    cursor: default;
`;

export const ColoredText = styled.span`
    @import url('https://fonts.googleapis.com/css?family=Anonymous+Pro&display=swap');
    color: ${props => props.color};
    font-family: "Anonymous Pro", monospace;
`;

export const Arrow = styled.p`
    color: lightgreen;
`;

export const Separator = styled.div`
    margin: 0 6px 0 6px;
    color: cyan;
    user-select: none;
`;

export const LineContainer = styled.div`
    display:flex;
    align-items: center;
`;