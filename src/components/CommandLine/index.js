import React from 'react';
import { Container } from './styles';

import TitleBar from './TitleBar';
import CommandBox from './CommandBox';


export default function CommandLine({ height, title, welcomeMessage='' }) {

  return (
    <Container>
        <TitleBar title={title} />    
        <CommandBox  height={height} welcomeMessage={welcomeMessage} />
    </Container>
  );
}
