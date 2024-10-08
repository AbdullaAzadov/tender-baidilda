import style from "./Advantages.module.css";

import LinkButton from "../../ui/LinkButton/LinkButton";
import { TrialLessonLink } from "../../utils/links";

const advList = [
    {
        title: "Удобный формат",
        icon: null,
        body: "Онлайн видеоуроки можно смотреть в удобное для вас время, и в любой точке земного шара.",
    },
    {
        title: "Полное сопровождение",
        icon: null,
        body: "Мы будем сопровождать вас по любым вопросам, возникшим во время обучения.",
    },
    {
        title: "Пошаговая Инструкция",
        icon: null,
        body: "Наши уроки пошагово объясняют и учат всему что вам нужно для старта в тендерах.",
    },
    {
        title: "Документы",
        icon: null,
        body: "В курс входит вся нужная документация, все призентации и шаблоны документов.",
    },
    {
        title: "Удобная цена",
        icon: null,
        body: "Данная нами цена самое малое что вы можете дать за такой сервис и за очень важную информацию.",
    },
    {
        title: "Много Крутых Фишек",
        icon: null,
        body: "Оба курса полны разных фишек, как сэкономить, как выиграть или как быстро привезти товар.",
    },
];

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
                    {advList.map((item, i) => (
                        <li className="card" key={i}>
                            <i>12</i>
                            <h5>{item.title}</h5>
                            <p>{item.body}</p>
                        </li>
                    ))}
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
