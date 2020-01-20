import React, { useState } from 'react';
import { Container, InputBox, Arrow, Separator } from './styles';
import { FaLongArrowAltRight } from 'react-icons/fa';

export default function Input({ onSubmit, reference }) {

    const [text, setText] = useState('');

    function submitText(event){
        if(!text || text.length <= 0) return;

        if(event.keyCode == 13 || event.which == 13){
            onSubmit(text)
            setText('');
        }
    }

    return (
        <Container>
            <Arrow><FaLongArrowAltRight /></Arrow>
            <Separator>~</Separator>
            <InputBox ref={reference} onKeyPress={(e) => submitText(e)} onChange={(e) => setText(e.target.value)} value={text} autoFocus={true} />
        </Container>
    );
}
