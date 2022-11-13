import Search from "../../components/utils/Search";
import ProjectWindow from "../../components/projectWindow/ProjectWindow";
import style from "./HomePage.module.scss";

const HomePage = () => {
    return (
        <div className={style.test}>
            <Search />
            <ProjectWindow />
        </div>
    );
};

export default HomePage;
