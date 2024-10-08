import style from "./Footer.module.css";

import LinkButton from "../../ui/LinkButton/LinkButton";
import { TrialLessonLink as link } from "../../utils/links";

export default function Footer() {
    return (
        <footer id="contact" className={style.footer}>
            <div className="flex-center">
                <LinkButton link={link.link}>{link.body}</LinkButton>
            </div>
            <div className="flex-center">
                <a href={link.link} className={style.phoneNumber}>
                    +7 778 869 65 33
                </a>
            </div>
        </footer>
    );
}
