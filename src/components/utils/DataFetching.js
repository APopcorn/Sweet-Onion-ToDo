import axios from "axios";
import { useState, useEffect } from "react";

function DataFetching() {
    axios;
    const [posts, setPosts] = useState(second);
    useEffect(() => {
        axios
            .get("http://localhost:8080/projects")
            .then(function (response) {
                console.log(response.data);
                setPosts(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    });

    return (
        <div>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    );
}

export default DataFetching;
