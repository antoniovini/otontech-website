import React from 'react';
import { Image } from './styles';

export default function ProfileImage({ src, width }) {
  return (
    <Image src={src} width={width}/>
  );
}
