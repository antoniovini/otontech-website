import React from 'react';
import { 
  Container, 
  Title,
  Info,
  SocialIcons,
  Link
} from './styles';
import ProfileImage from '../ProfileImage';

export default function Card(props) {

  const {
    image=null,
    height,
    title='Title',
    description='Description',
    social=[]
  } = props;

  return (
    <Container height={height}>
      <ProfileImage src={image} width={200} />
      <Title>{title}</Title>
      <Info>{description}</Info>
      <SocialIcons>
        {social.map(v => <Link key={social.indexOf(v)} href={v.link}>{v.icon}</Link>)}
      </SocialIcons>
    </Container>
  );
}
