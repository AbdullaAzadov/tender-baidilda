import style from "./LinkButton.module.css";

export default function LinkButton({ children, link }) {
    return (
        <a className={style.button} href={link}>
            {children}
        </a>
    );
}
