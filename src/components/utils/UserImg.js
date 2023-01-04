import userImg from "../../assets/img/userIcon.jpg"
import style from "./UserImg.module.scss"


const UserImg = () => {

    return (
        <div className={style.userImgBox}>
            <img className={style.userImg} src={userImg} alt="user img" />
        </div>
    )

}

export default UserImg 