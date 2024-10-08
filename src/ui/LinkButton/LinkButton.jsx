import style from "./LinkButton.module.css";

export default function LinkButton({ children, link, className = "" }) {
    return (
        <a className={`${style.button} ${className}`} href={link}>
            {children}
        </a>
    );
}
