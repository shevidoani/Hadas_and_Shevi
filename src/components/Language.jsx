export default function Language({ changeLan, changeChar, changeNums,changeSigns }) {
    return(
        <div>
            <button onClick={changeLan}>🌍</button>
            <button onClick={changeChar}>🙂</button>
            <button onClick={changeNums}>🔢</button>
            <button onClick={changeSigns}>🔣</button>
        </div>);
}