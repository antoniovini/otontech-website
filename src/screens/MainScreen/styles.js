import styled from 'styled-components';
import { Primary, Danger } from '../../utils/colors';

export const Container = styled.div `
    width: 100%;
    height: 100%;
    background-color: ${Primary('dark')};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Logo = styled.img `
    height: 100px;
    margin-bottom: 40px;
`;

export const CardsContainer = styled.div `
    display: flex;
`;

export const By = styled.span `
    user-select: none;
    margin-top: 20px;
    font-family: 'Anonymous Pro', monospace;
    color: white;

    text-shadow: 0 0 5px #111;
`;

export const Hearth = styled.span `
    color: ${Danger()};

    &:hover{
        color: red;
        cursor: grab;
    }
`;