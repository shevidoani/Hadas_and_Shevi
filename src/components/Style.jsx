export default function Style({ setStyleArr, styleArr, text, setText }) {
    function changeColor(color) {
        let newStyle = {
            color: color,
            fontSize: styleArr[styleArr.length - 1].fontSize,
            fontFamily: styleArr[styleArr.length - 1].fontFamily
        };
        changeChar(newStyle);
    }
    function changeSize(size) {
        let newStyle = {
            color: styleArr[styleArr.length - 1].color,
            fontSize: size,
            fontFamily: styleArr[styleArr.length - 1].fontFamily
        };
        changeChar(newStyle);
    }
    function changeStyle(m_style) {
        let newStyle = {
            color: styleArr[styleArr.length - 1].color,
            fontSize: styleArr[styleArr.length - 1].fontFamily,
            fontFamily: m_style
        };
        changeChar(newStyle);
    }
    function changeChar(newStyle) {
        setStyleArr(pre => pre.concat(newStyle));
    }

    return (
        <div>
            <select onChange={(event) => changeColor(event.target.value)}>
                <option disabled selected value="">🎨</option>
                <option value="red">🔴</option>
                <option value="green">🟢</option>
                <option value="yellow">🟡</option>
                <option value="blue">🔵</option>
            </select>
            <select onChange={(event) => changeSize(event.target.value)}>
                <option disabled selected value="">size</option>
                <option value="14px">14px</option>
                <option value="18px">18px</option>
                <option value="20px">20px</option>
                <option value="24px">24px</option>
            </select>
            {/* <select onChange={(event) => changeStyle(event.target.value)}>
                <option disabled selected value="">Select Font Style</option>
                <option value="Calibri">Bold</option>
                <option value="italic">Italic</option>
            </select> */}
            <select onChange={(event) => changeStyle(event.target.value)}>
                <option disabled selected value="">Font</option>
                <option value="Calibri">Calibri</option>
                <option value="Arial">Arial</option>
                <option value="Times New Roman">Times New Roman</option>
                <option value="Verdana">Verdana</option>
                <option value="Courier New">Courier New</option>
            </select>

        </div>
    )
}