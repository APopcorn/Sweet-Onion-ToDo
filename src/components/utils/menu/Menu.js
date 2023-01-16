import style from "./Menu.module.scss";

import { NavLink } from "react-router-dom";

const Menu = () => {
    return (
        <nav className={style.test}>
            <NavLink
                to="/"
                className={({ isActive }) =>
                    isActive ? style.active : style.link
                }
            >
                Home
            </NavLink>
            <NavLink
                to="about"
                className={({ isActive }) =>
                    isActive ? style.active : style.link
                }
            >
                About
            </NavLink>
            <NavLink
                to="login"
                className={({ isActive }) =>
                    isActive ? style.active : style.link
                }
            >
                Login
            </NavLink>

            {/* Inside Menu Look - should sit to the side - round - slide in an out
            Contain - projects - The different/ resent projects open - or
            different project pages - To home pages - logout - user settings */}
        </nav>
    );
};

export default Menu;
