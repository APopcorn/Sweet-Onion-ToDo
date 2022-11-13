import ProjectWindow from "./components/projectWindow/ProjectWindow";
import Menu from "./components/utils/menu/Menu";
import Search from "./components/utils/Search";
import HomePage from "./pages/Home/HomePage";
import About from "./pages/About";
import LoginPage from "./pages/Login/LoginPage";
import Error from "./pages/Error";
import SharedLayout from "./pages/SharedLayout";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
    return (
        <div>
            <div>
                <Router>
                    <Routes>
                        <Route path="/" element={<SharedLayout />}>
                            <Route index element={<HomePage />} />
                            <Route path="about" element={<About />} />
                            <Route path="login" element={<LoginPage />} />
                            <Route path="*" element={<Error />} />
                        </Route>
                    </Routes>
                </Router>
            </div>
        </div>
    );
}

export default App;
