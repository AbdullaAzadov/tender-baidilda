import style from "./Pricing.module.css";

import LinkButton from "../../ui/LinkButton/LinkButton";
import { StartCourseLink as link } from "../../utils/links";

export default function Pricing() {
    return (
        <section className={style.pricing} id="pricing">
            <div className="container">
                <div className="section__title">
                    <p>ЦЕНЫ</p>
                    <h3>Ваш выбор - ваши цены</h3>
                </div>
                <ul className={style.cards}>
                    <li className="wrapper">
                        <div className={style.card}>
                            <h4>Тендерная Мастерская Онлайн</h4>
                            <span>12 990тг</span>
                            <ul>
                                <li>Полный курс+БОНУСЫ</li>
                                <li>60 Уроков ТМО</li>
                                <li>Тех-поддержка</li>
                                <li>База Поставщиков</li>
                                <li>Раздаточный Материал</li>
                                <li>Бесплатное обновление</li>
                            </ul>
                        </div>
                        <div className="flex-center">
                            <LinkButton link={link.link}>
                                {link.body}
                            </LinkButton>
                        </div>{" "}
                    </li>

                    <li className="wrapper">
                        <div className={`${style.card} best`}>
                            <h4>Оба курса</h4>
                            <span>17 990тг</span>
                            <ul>
                                <li>Тендерная Мастерская</li>
                                <li>Закупки из Китая</li>
                                <li>Экономия 30%</li>
                                <li>Тех-поддержка</li>
                                <li>Раздаточный Материал</li>
                                <li>База Поставщиков</li>
                            </ul>
                        </div>
                        <div className="flex-center">
                            <LinkButton link={link.link}>
                                {link.body}
                            </LinkButton>
                        </div>
                    </li>
                    <li className="wrapper">
                        <div className={style.card}>
                            <h4>Китай без посредников</h4>
                            <span>12 990тг</span>
                            <ul>
                                <li>Полный курс</li>
                                <li>60 Уроков</li>
                                <li>Тех-поддержка</li>
                                <li>Раздаточный Материал</li>
                                <li>База Поставщиков Китая</li>
                            </ul>
                        </div>
                        <div className="flex-center">
                            <LinkButton link={link.link}>
                                {link.body}
                            </LinkButton>
                        </div>{" "}
                    </li>
                </ul>
            </div>
        </section>
    );
}
