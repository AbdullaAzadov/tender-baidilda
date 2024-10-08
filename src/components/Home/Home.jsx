import style from "./Home.module.css";

import LinkButton from "../../ui/LinkButton/LinkButton";
import { WhatsAppLink, TrialLessonLink } from "../../utils/links";

export default function Home() {
    return (
        <section className={style.home} id="home">
            <div className="container">
                <div className={style.info}>
                    <h5>
                        <span className="line"></span>
                        Пробный урок
                    </h5>
                    <h2>ТЕНДЕРНАЯ МАСТЕРСКАЯ</h2>
                    <h2>Нурлан Байдильда</h2>
                    <ul>
                        <li>
                            <LinkButton link={WhatsAppLink.link}>
                                {WhatsAppLink.body}
                            </LinkButton>
                        </li>
                        <li>
                            <LinkButton link={TrialLessonLink.link}>
                                {TrialLessonLink.body}
                            </LinkButton>
                        </li>
                    </ul>
                </div>
                <div className={style.hero}>
                    <img src="images/intro.jpg" alt="Nurlan Baidilda" />
                </div>
            </div>
        </section>
    );
}
