import style from "./Menu.module.scss"
import MenuOption from "./MenuOption"


const Menu = () => {

    return (
        <div className={style.test}>

            <MenuOption />
            <MenuOption />
            <MenuOption />

            Inside Menu

            Look
                - should sit to the side
                - round 
                - slide in an out  

            Contain 
                - projects 
                    - The different/ resent projects open 
                    - or different project pages 
                - To home pages 
                - logout
                - user settings  
        </div>
    )
}


export default Menu 