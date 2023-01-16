import style from "./ProjectTitle.module.scss";

const ProjectTitle = ({ title }) => {
    return <div className={style.project__title}>{title}</div>;
    // whats to change color and text
};

export default ProjectTitle;
