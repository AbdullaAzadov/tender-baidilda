import style from "./Advantages.module.css";

import LinkButton from "../../ui/LinkButton/LinkButton";
import { TrialLessonLink } from "../../utils/links";

export default function Advantages() {
    return (
        <section className={style.advantages} id="services">
            <div className="container">
                <div className="section__title">
                    <p>Преимущества</p>
                    <h3>ВидеоКурсы</h3>
                    <h3>Нурлана Байдильда это:</h3>
                </div>
                <ul className="cards">
                    <li className="card">
                        <i>12</i>
                        <h5>Удобный формат</h5>
                        <p>
                            Онлайн видеоуроки можно смотреть в удобное для вас
                            время, и в любой точке земного шара.
                        </p>
                    </li>
                    <li className="card">
                        <i>12</i>
                        <h5>Полное сопровождение</h5>
                        <p>
                            Мы будем сопровождать вас по любым вопросам,
                            возникшим во время обучения.
                        </p>
                    </li>

                    <li className="card">
                        <i>12</i>
                        <h5>Пошаговая Инструкция</h5>
                        <p>
                            Наши уроки пошагово объясняют и учат всему что вам
                            нужно для старта в тендерах.
                        </p>
                    </li>
                    <li className="card">
                        <i>12</i>
                        <h5>Документы</h5>
                        <p>
                            В курс входит вся нужная документация, все
                            призентации и шаблоны документов.
                        </p>
                    </li>
                    <li className="card">
                        <i>12</i>
                        <h5>Удобная цена</h5>
                        <p>
                            Данная нами цена самое малое что вы можете дать за
                            такой сервис и за очень важную информацию.
                        </p>
                    </li>
                    <li className="card">
                        <i>12</i>
                        <h5>Много Крутых Фишек</h5>
                        <p>
                            Оба курса полны разных фишек, как сэкономить, как
                            выиграть или как быстро привезти товар.
                        </p>
                    </li>
                </ul>
                <div className={style.statistics}>
                    <div className="item">
                        <h4>164</h4>
                        <span>Учеников</span>
                    </div>
                    <div className="item">
                        <h4>80%</h4>
                        <span>Выиграли тендер</span>
                    </div>
                    <div className="item">
                        <h4>165 млн</h4>
                        <span>на общ сумму</span>
                    </div>
                </div>
                <div className="flex-center">
                    <LinkButton link={TrialLessonLink.link}>
                        {TrialLessonLink.body}
                    </LinkButton>
                </div>
            </div>
        </section>
    );
}
