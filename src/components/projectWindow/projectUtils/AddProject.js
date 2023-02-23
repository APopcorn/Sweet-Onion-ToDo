import axios from "axios";
import style from "./AddProject.module.scss";
import { useState } from "react";

function AddProject({ setChange }) {
    const [keySubmit, setKeySubmit] = useState("");
    const [infoSubmit, setInfoSubmit] = useState("");

    const [toggle, setToggle] = useState(false);

    const getKeySubmit = () => {
        return keySubmit;
    };

    const getInfoSubmit = () => {
        return infoSubmit;
    };

    const submitPost = () => {
        axios
            .post("http://localhost:8080/projects", {
                title: getKeySubmit(),
                description: getInfoSubmit(),
                images: "",
            })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
        setToggle(!toggle);
        setChange(toggle);
    };

    return (
        <div className={style.project__container}>
            <button className={style.text} onClick={submitPost}>
                Add
            </button>
        </div>
    );
}

export default AddProject;
