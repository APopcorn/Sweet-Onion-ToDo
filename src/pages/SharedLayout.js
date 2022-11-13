import Menu from "../components/utils/menu/Menu";
import style from "./SharedLayout.module.scss";

import { Outlet } from "react-router-dom";

const SharedLayout = () => {
    return (
        <div className={style.test}>
            <Menu />
            <section>
                <Outlet />
            </section>
        </div>
    );
};

export default SharedLayout;
