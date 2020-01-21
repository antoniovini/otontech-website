import styled from 'styled-components';
import { Primary } from '../../utils/colors';

export const Container = styled.div `
    background-color: ${Primary()};
    padding: 20px;
    border-radius: 8px;
    height: ${props => props.height};
    box-shadow: 0 0 10px #111;
`;

export const Title = styled.h4`
    color: white;
    font-size: 1em;
    text-align: center;
    margin: 10px 0 5px 0;
`;

export const Info = styled.h5`
    color: ${Primary('light')};
    text-align: center;
`;

export const SocialIcons = styled.div`
    border-top: 1px solid ${Primary('light')};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
    padding-top: 10px;
`;

export const Link = styled.a`
    color: ${Primary('light')};
    font-size: 1.2em;

    &:hover{
        color: white;
    }
`;