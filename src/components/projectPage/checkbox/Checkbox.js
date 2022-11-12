import { useState } from "react"


const Checkbox = () => {

    const [text, setText] = useState("")
    const [checked, setChecked] = useState(false)

    return (
        <div className={checked ?  "checkbox checked" : "checkbox"} >
            <form>
                <input 
                    className="input__checkbox"
                    type="checkbox"
                    checked={checked}
                    onChange={(e) => setChecked(!checked)} 
                />
                <input 
                    className="input__text"
                    type="text" 
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />

            </form>
        </div>
        
    )
    

}

export default Checkbox