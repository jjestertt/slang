import style from "../Content.module.scss";
import ButtonRefresh from "../../button/ButtonRefresh";

const RandomContent = ({title, text, getRandomItem}) => (
    <div className={style.contentWrapper}>
        <h2 className={style.contentTitle}>{title}</h2>
        <p className={style.contentText}><b>{title}</b> {text}</p>
        <div className={style.button}>
            <ButtonRefresh onClick={() => getRandomItem()}>Refresh</ButtonRefresh>
        </div>
    </div>
)

export default RandomContent;