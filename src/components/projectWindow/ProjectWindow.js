import axios from "axios";
import ProjectContainer from "./ProjectContainer";
import styles from "./ProjectWindow.module.scss";
import { useState, useEffect } from "react";

const ProjectWindow = () => {
    const [projects, setProjects] = useState([""]);

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
    }, []);

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
            <div>Add</div>
        </div>
    );
};

export default ProjectWindow;
