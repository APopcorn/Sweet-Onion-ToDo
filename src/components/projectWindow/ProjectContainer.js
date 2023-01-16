import ImageBox from "./projectContainer/ImageBox";
import ProjectTitle from "./projectContainer/ProjectTitle";
import ProjectTextBox from "./projectContainer/ProjectTextBox";
import { useState } from "react";
import style from "./ProjectContainer.module.scss";

import { NavLink } from "react-router-dom";

const ProjectContainer = ({ id, title, description, images }) => {
    const [expand, setExpand] = useState(false);
    const projectId = "projects/" + id + "";
    return (
        <div key={id} className={style.project__container}>
            <NavLink to={projectId} className={style.theATag}></NavLink>

            {expand ? (
                <div>
                    Whats to expand to a bigger text version when hovering
                </div>
            ) : (
                <>
                    <ImageBox images={images} />
                    <ProjectTitle title={title} />
                    <ProjectTextBox description={description} />
                </>
            )}
        </div>
    );
};

export default ProjectContainer;
