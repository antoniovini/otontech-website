import React, { useState, useEffect, createRef } from 'react';

import { Container, Line, ColoredText, Arrow, Separator, LineContainer} from './styles';

import { FaLongArrowAltRight } from 'react-icons/fa';

import { Danger } from '../../../utils/colors';
import Input from '../Input';

export default function CommandBox({ height, welcomeMessage='' }) {

    // create lines state
    const [lines, setLines] = useState([]);

    // user input ref
    const inputRef = createRef();

    // all commands
    const commands = {
        clear: () => clearMsg(),
        help: () => addMsg({ text: 'Supported commands:' + Object.keys(commands).map(v => ` *${v}*`) + '.', type: 'response' }),
    };

    // use effect to set focus to input
    useEffect(() => {
        if(inputRef.current) window.addEventListener('click', () => { inputRef.current.focus() })
    }, [inputRef])

    // format line removing ** from text and add color to word
    function formatLine(line){
        const splitedText = line.split('*');

        if(splitedText.length > 2){

        line = splitedText.reduce((acc, curr, idx) => {

            if(!acc) return [<span key={idx}>{curr}</span>];

            if(idx % 2 != 0){
            return acc.concat(<ColoredText key={idx} color={Danger()}>{curr}</ColoredText>);
            }else{
            return acc.concat(<span key={idx}>{curr}</span>)
            }
        }, null);
        }

        return <Line key={lines.indexOf(line)}>{line}</Line>;
    }

    // add new line
    function addMsg({text, type='response'}){
        setLines(old => old.concat({ text, type }));
    }

    // clear all lines
    function clearMsg(){
        setLines([])
    }

    // get user input
    function onSubmit(text){
        const msg = { text, type: 'sended' }
        addMsg(msg);
        commandManager(msg);
    }

    // manager the command sended by user
    function commandManager(msg){
        let exists = commands[msg.text];
        if(!exists) addMsg({ text: `No such command: *${msg.text}*`, type: 'response'});
        else exists(setLines);
    }

    return (
        <Container height={height}>
            {formatLine(welcomeMessage)}
            {lines.map(line => {
                if(line.type === 'sended') return <LineContainer key={lines.indexOf(line)}><Arrow><FaLongArrowAltRight /></Arrow> <Separator>~</Separator> {formatLine(line.text)}</LineContainer>;
                else return formatLine(line.text)
            })}
            <Input onSubmit={onSubmit} reference={inputRef} />
        </Container>
    );
}
