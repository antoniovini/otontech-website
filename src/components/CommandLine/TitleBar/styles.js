import styled from 'styled-components';

export const Container = styled.div`
    background-image: linear-gradient(180deg, #464248 0%, #3b383d 100%);
    height: 36px;
    width: 800px;
    border-radius: 8px 8px 0 0;
    border-bottom: 1px solid rgba(66, 66, 66, 0.5);
    display: flex;
    flex-direction: row;
    position: relative;
`;

export const ButtonsContainer = styled.div`
    margin-left: 6px;
    width: 66px;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`;

export const Button = styled.button`
    width: 16px;
    height: 16px;
    border-radius: 8px;
    border: 0;
    background-color: ${props => props.color};
    outline: none;
`;

export const Title = styled.h4`
    position: absolute;
    width: 100%;
    text-align: center;
    line-height: 36px;
    color: #bdb9bf;
    user-select: none;
`;