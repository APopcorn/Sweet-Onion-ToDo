import { useState } from "react"

import Checkbox from "./Checkbox"


const CheckboxContainer = () => {

    const [text, setText] = useState("")


    return (
        <div className="checkbox__container">
            <form action="">
                <input 
                    className="checkbox__heading__text"
                    type="text" 
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
            </form>
            
            <Checkbox />
            <Checkbox />
            <Checkbox />
            <Checkbox />
            <Checkbox />
            <Checkbox />
            <Checkbox />
            <Checkbox />
            
        </div>
    )

}

export default CheckboxContainer