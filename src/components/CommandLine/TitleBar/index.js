import React from 'react';
import { Container, ButtonsContainer, Button, Title } from './styles';

export default function TitleBar({ title }) {
  return (
    <Container>
        <ButtonsContainer>
            <Button color={'#FA615C'}/>
            <Button color={'#FFBD48'}/>
            <Button color={'#3FC950'}/>
        </ButtonsContainer>
        <Title>{title}</Title>     
    </Container>
  );
}