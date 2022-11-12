import { useState } from "react"
import style from "./Search.module.scss"


const Search = () => {
    const [text, setText] = useState("");

    return (
        <div>
            <form action="">
                <input 
                    className={style.input__text}
                    type="text" 
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
            </form>

            {/* Icon */}
        </div>
    )

}

export default Search 