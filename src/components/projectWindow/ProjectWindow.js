import ProjectContainer from "./ProjectContainer";
import styles from "./ProjectWindow.module.scss";

const ProjectWindow = () => {
    const data = [0, 1, 2, 30, 1, 2];

    return (
        <div className={styles.test}>
            {data.map((project, index) => {
                return (
                    <div>
                        <ProjectContainer />
                    </div>
                );
            })}
        </div>
    );
};

export default ProjectWindow;
