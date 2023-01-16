import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CheckboxContainer from "./checkbox/CheckboxContainer";

const ProjectDetails = () => {
    const params = useParams();
    const projectId = params.projectId;

    const [projectData, setProjectData] = useState([""]);

    useEffect(() => {
        axios
            .get("http://localhost:8080/projects/" + projectId)
            .then(function (response) {
                console.log(response.data);
                setProjectData(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);

    return (
        <div>
            <CheckboxContainer />
            <div> Add </div>
        </div>
    );
};

export default ProjectDetails;
