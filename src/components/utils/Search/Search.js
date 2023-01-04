import { useState } from "react"
import style from "./Search.module.scss"


const Search = ({ setElement }) => {
    const [text, setText] = useState("");

    const onClickEvent = (event) => {
        event.preventDefault();
        setElement(text);
        console.log(text);
    }

    return (
        <div>
            <form onSubmit={onClickEvent} >
                <input 
                    className={style.input__text}
                    type="text" 
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
            </form>
        </div>
    )

}

export default Search 