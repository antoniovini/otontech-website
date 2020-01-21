import React from 'react';
import { Container, By, CardsContainer, Hearth, Logo } from './styles';
import Card from '../../components/Card';

import { FaGithubSquare, FaLinkedin, FaInstagram, FaFacebookSquare, FaTwitterSquare, FaHeart } from 'react-icons/fa';
import CommandLine from '../../components/CommandLine';

export default function MainScreen() {
  return (
    <Container>
      
      <Logo src={require('../../assets/img/logo-branca-oton.png')} />

      <CardsContainer>
        <Card
          height={'330px'}
          image={require('../../assets/img/profile.png')}
          title='Antônio Vinicius'
          description='CEO'
          social={[
            { link: '#', icon: <FaGithubSquare /> },
            { link: '#', icon: <FaLinkedin /> },
            { link: '#', icon: <FaInstagram /> },
            { link: '#', icon: <FaFacebookSquare /> },
            { link: '#', icon: <FaTwitterSquare /> }
          ]}
        />

        <CommandLine 
          height={'330px'}
          title={'guest@otontech: ~'}
          welcomeMessage={'Welcome to my website - Type *help* for a list of supported commands'}
        />
      </CardsContainer>

      <By>Made with <Hearth><FaHeart /></Hearth> by Otontech</By>
    </Container>
  );
}
