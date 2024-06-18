
export default function Change({ setText, text, setStyleArr, styleArr, lastText, setLastText, i, setI }) {
    function deleteChar() {
        setLastText([...lastText, text]);
        setText([...text].slice(0, -1));
    }
    function undo() {
        if (lastText.length >= 1) {
            setText(lastText[lastText.length - 1]);
            setLastText(lastText.slice(0, -1));
        }
        else
            console.log("אין פעולות אחרונות שנעשו על הטקסט");
        if (styleArr.length >= 2)
            setStyleArr(styleArr.slice(0, styleArr.length - 1));
        else
            console.log("אין פעולות אחרונות שנעשו על העיצוב");
    }
    function clearAll() {
        setLastText([...lastText, text]);
        setText([]);
    }
    function upper() {
        setLastText([...lastText, text]);
        let upperText = text.map((char) => {
            if (char.type === 'br') {
                setI(i + 1);
                return char;
            }
            let newChar = { ...char };
            newChar.props = { ...char.props };
            newChar.props.children = char.props.children.toUpperCase();
            return newChar;
        });
        setText(upperText);
    }
    function lower() {
        setLastText([...lastText, text]);
        let lowerText = text.map((char) => {
            if (char.type === 'br') {
                setI(i + 1);
                return char;
            }
            let newChar = { ...char };
            newChar.props = { ...char.props };
            newChar.props.children = char.props.children.toLowerCase();
            return newChar;
        });
        setText(lowerText);
    }
    return (
        <div>
            <button onClick={undo}>↩</button>
            <button onClick={deleteChar}>✖</button>
            <button onClick={clearAll}>🚫</button>
            <button onClick={upper}>ABC</button>
            <button onClick={lower}>abc</button>
        </div>
    )
}