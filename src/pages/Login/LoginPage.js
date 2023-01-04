import Search from "../../components/utils/Search/Search";
import UserImg from "../../components/utils/UserImg";
import style from "./LoginPage.module.scss"

const LoginPage = () => {
    return (
        <div className={style.loginContainer}>
            <div className={style.loginBox}>
                Login to user 
                <UserImg />
                <div>
                    <Search />
                    <Search />
                </div>

            </div>
        </div>
    );
};

export default LoginPage;
