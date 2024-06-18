import { useState } from 'react'
import Language from './Language';

export default function Keyboard({ text, setText, lan, setCorLanguage, styleArrey, lastText, setLastText, i,setI }) {
    let characters = {
        hebrew: ['ת', 'ש', 'ר', 'ק', 'ץ', 'צ', 'ף', 'פ', 'ע', 'ס', 'ן', 'נ', 'ם', 'מ', 'ל', 'ך', 'כ', 'י', 'ט', 'ח', 'ז', 'ו', 'ה', 'ד', 'ג', 'ב', 'א'],
        lowerEnglish: ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm', '⬆'],
        upperEnglish: ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '⬇'],
        emoji: ['😀', '😁', '😂', '🤣', '😃', '😄', '😅', '😆', '😉', '😊', '😎', '🥱'],
        numbers: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
        signs: ['/', '.', ',', '[', ']', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')']
    }
    function addChar(char) {
        if (char === '⬇')
            setCorLanguage("lowerEnglish");
        else if (char === '⬆')
            setCorLanguage("upperEnglish");
        else {
            setI(i+1);
            setLastText([...lastText, text]);//הוספה של הטקסט הנוכחי למערך
            let newStyle = styleArrey[styleArrey.length - 1];
            let newChar = <span key={i} style={newStyle}>{char}</span>;
            setText([...text, newChar]);
            console.log("lastTxt=", lastText);
        }
    }
    function space(){
        setI(i+1);
        setText([...text, <span key={i}> </span>]);
    }
    function enter(){
        setText([...text, <br key={(i++)}/>]);
    }
    return (
        <div>
            {characters[lan].map((m_char, key) =>
                <button key={key} onClick={() => { addChar(m_char) }}>{m_char}</button>)}
            <br /><button onClick={space}> SPACE </button>
            <button onClick={enter}> ENTER </button>
        </div>
    )
}
