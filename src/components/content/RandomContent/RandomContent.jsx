import style from "../Content.module.scss";
import ButtonRefresh from "../../button/ButtonRefresh";

const RandomContent = ({title, text, img, getRandomItem}) => (
    <div className={style.contentWrapper}>
        <div className="row">
                <div className={style.card+" card"}>
                    <div className={style.cardImageWrapper + " card-image"}>
                        <img className={style.cardImage} src={img} alt={title}/>
                    </div>
                    <div className={"card-content " + style.cardContent}>
                        <span className="card-title">{title}</span>
                        <p>{text}</p>
                    </div>
                    <div className={"card-action " + style.cardAction}>
                        <a href="/#">Like</a>
                        <div className={style.buttonRefresh}>
                            <ButtonRefresh onClick={(e) => getRandomItem(e)}>Refresh</ButtonRefresh>
                        </div>
                    </div>
                </div>
        </div>
    </div>

)

export default RandomContent;