import img1 from "../../assets/img/gas.jpg";
import style from "./ImageBox.module.scss"


const ImageBox = () => {
    return (
        <div className={style.image__box}>
            <img className={style.imgInBox} src={img1} alt="Test" />I what to be abel
            to move the images
        </div>
    );
};

export default ImageBox;
