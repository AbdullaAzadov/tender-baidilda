import style from "./About.module.css";

import LinkButton from "../../ui/LinkButton/LinkButton";
import { TrialLessonLink } from "../../utils/links";
export default function About() {
    return (
        <section className={style.about} id="about">
            <div className="container">
                <div className="section__title">
                    <p>О Курсе</p>
                    <h3>Наша Цель</h3>
                    <h3>сделать обучение доступным</h3>
                </div>
                <ul className="cards">
                    <li className="card">
                        <i>12</i>
                        <h5>Понятно, Да?</h5>
                        <p>
                            Курсы созданы на пошаговой инструкцие и практике, мы
                            объясняем вам все на понятном языке, и поэтапно
                        </p>
                    </li>
                    <li className="card">
                        <i>12</i>
                        <h5>Смарт Решения</h5>
                        <p>
                            Наши курсы полны разных фишек, которые сделают жизнь
                            предпренимателю и тендерщику намного легче
                        </p>
                    </li>
                    <li className="card">
                        <i>12</i>
                        <h5>Бесплатная Тех-поддержка</h5>
                        <p>
                            Если у вас возникнут вопросы, можете позвонить нам в
                            любое время.
                        </p>
                    </li>
                </ul>
                <div className="flex-center">
                    <LinkButton link={TrialLessonLink.link}>
                        {TrialLessonLink.body}
                    </LinkButton>
                </div>
            </div>
        </section>
    );
}
