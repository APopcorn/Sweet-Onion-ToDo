import axios from "axios";
import { useState } from "react";
import Search from "../components/utils/Search/Search";
import style from "./About.module.scss";

const About = () => {
    const [keySubmit, setKeySubmit] = useState("");
    const [infoSubmit, setInfoSubmit] = useState("");

    const [keySearch, setKeySearch] = useState("");

    const getKeySubmit = () => {
        return keySubmit;
    };

    const getInfoSubmit = () => {
        return infoSubmit;
    };

    const submitPost = () => {
        console.log("Key: " + keySubmit);

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

        console.log("Info: " + infoSubmit);
    };

    const submitGet = () => {
        axios
            .get("http://localhost:8080/projects")
            .then(function (response) {
                console.log(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    const submitSearchGet = () => {
        console.log("Key: " + keySearch);
        axios
            .get("http://localhost:8080/projects/" + keySearch)
            .then(function (response) {
                console.log(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    const deleteAllSubmit = () => {
        axios
            .delete("http://localhost:8080/projects")
            .then(function (response) {
                console.log("Data: " + response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    return (
        <div className={style.container}>
            <div className={style.sending}>
                <Search setElement={setKeySubmit} />
                <Search setElement={setInfoSubmit} />
                <button onClick={submitPost}>Submit</button>
            </div>

            <div className={style.searching}>
                <Search setElement={setKeySearch} />
                <button onClick={submitSearchGet}>Search</button>
            </div>

            <div className={style.actions}>
                <button onClick={submitGet}>Search</button>
                <button onClick={deleteAllSubmit}>Delete All</button>
            </div>
        </div>
    );
};

export default About;
