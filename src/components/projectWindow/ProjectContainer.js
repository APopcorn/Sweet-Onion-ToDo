import ImageBox from "./ImageBox";
import ProjectTitle from "./ProjectTitle";
import ProjectTextBox from "./ProjectTextBox";
import { useState } from "react";
import style from "./ProjectContainer.module.scss";

const ProjectContainer = () => {
    const [expand, setExpand] = useState(false);
    return (
        <div className={style.project__container}>
            {expand ? (
                <div>
                    Whats to expand to a bigger text version when hovering
                </div>
            ) : (
                <>
                    <ImageBox />
                    <ProjectTitle />
                    <ProjectTextBox />
                </>
            )}
        </div>
    );
};

export default ProjectContainer;
