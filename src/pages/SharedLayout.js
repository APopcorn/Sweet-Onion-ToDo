import Menu from "../components/utils/menu/Menu";

import { Outlet } from "react-router-dom";

const SharedLayout = () => {
    return (
        <div>
            <Menu />
            <section>
                <Outlet />
            </section>
        </div>
    );
};

export default SharedLayout;
