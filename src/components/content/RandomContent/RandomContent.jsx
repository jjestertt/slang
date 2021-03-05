import style from "../Content.module.scss";
import ButtonRefresh from "../../button/ButtonRefresh";

const RandomContent = ({title, text, img, getRandomItem}) => (
    <div className={style.contentWrapper}>
        <div className={style.content}>
            <div>
                <div className={style.imageBackground}>
                    {img && <img className={style.itemImage} src={img} alt={title}/>}
                </div>
                <h2 className={style.contentTitle}>{title}</h2>
                <p className={style.contentText}>{text}</p>
            </div>

        </div>
        <div className={style.button}>
            <ButtonRefresh onClick={() => getRandomItem()}>Refresh</ButtonRefresh>
        </div>
    </div>
)

export default RandomContent;