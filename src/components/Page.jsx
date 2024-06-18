import { useState } from 'react'
import Keyboard from "./Keyboard";
import TextBox from "./TextBox";
import Language from './Language';
import Change from './Change';
import Style from './Style';
export default function Page() {
    const [text, setText] = useState([]);
    const [lastText, setLastText] = useState([]);//מערך ששומר את הפעולות האחרונות שנעשו
    const [corLanguage, setCorLanguage] = useState("hebrew");
    const [i,setI]=useState(0);
    let style = {
        color: 'black',
        fontSize: '16px',
        fontFamily: 'normal'
    };
    let styleArrey = [ style ];
    const [styleArr, setStyleArr] = useState(styleArrey);
    function changeLan() {
        if (corLanguage == "hebrew")
            setCorLanguage("upperEnglish");
        else
            setCorLanguage("hebrew");
    }
    function changeChar() {
        setCorLanguage("emoji");
    }
    function changeNums(){
        setCorLanguage('numbers');
    }
    function changeSigns(){
        setCorLanguage('signs');
    }
    return (
        <div>
            <TextBox text={text}/>
            <Keyboard text={text} setText={setText} lan={corLanguage} setCorLanguage={setCorLanguage} styleArrey={styleArr} lastText={lastText} setLastText={setLastText} i={i} setI={setI} />
            <Language changeLan={changeLan} changeChar={changeChar} changeNums={changeNums} changeSigns={changeSigns}/>
            <Change setText={setText} text={text} setStyleArr={setStyleArr} styleArr={styleArr} lastText={lastText} setLastText={setLastText} i={i} setI={setI}/>
            <Style setStyleArr={setStyleArr} styleArr={styleArr} setText={setText} text={text}/>
        </div>
    )
}