import axios from "axios";
import ProjectContainer from "./ProjectContainer";
import AddProject from "./projectUtils/AddProject";
import styles from "./ProjectWindow.module.scss";
import { useState, useEffect } from "react";

const ProjectWindow = () => {
    const [projects, setProjects] = useState([""]);
    const [change, setChange] = useState(true);

    useEffect(() => {
        axios
            .get("http://localhost:8080/projects")
            .then(function (response) {
                console.log(response.data);
                setProjects(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [change]);

    return (
        <div className={styles.test}>
            {projects.map((project) => {
                return (
                    <div>
                        <ProjectContainer
                            id={project.id}
                            title={project.title}
                            description={project.description}
                            images={project.images}
                        />
                    </div>
                );
            })}
            <AddProject setChange={setChange} />
        </div>
    );
};

export default ProjectWindow;
