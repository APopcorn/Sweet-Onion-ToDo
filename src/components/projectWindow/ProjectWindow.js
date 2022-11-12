import ProjectContainer from "./ProjectContainer";
import styles from "./ProjectWindow.module.scss";

const ProjectWindow = () => {
  const data = [0, 1, 2, 3, 4, 5, 6, 7]

  return (
    <div className={styles.test}>
      {data.map( (project, index) => {return (
          <div>
            <ProjectContainer />
          </div>
        )}
      )}
    </div>
  );
};

export default ProjectWindow;
