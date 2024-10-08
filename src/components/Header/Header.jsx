import { useEffect, useState } from "react";
import style from "./Header.module.css";

export default function Header() {
    const [showHeaderBg, setShowHeaderBg] = useState(false);

    useEffect(() => {
        function scroll() {
            setShowHeaderBg(window.scrollY > 80);
        }

        document.addEventListener("scroll", scroll);
        return () => document.removeEventListener("scroll", scroll);
    }, []);

    return (
        <header
            className={`${style.header} ${showHeaderBg ? "header-bg" : ""}`}
        >
            <div className="container">
                <div className={style.logoWrapper}>
                    <img src="images/logo.png" alt="Tender First" />
                </div>
                <nav>
                    <a href="#home">Главная</a>
                    <a href="#about">О Нас</a>
                    <a href="#services">Наши преимущества</a>
                    <a href="#portfolio">Скрины</a>
                    <a href="#pricing">Цены</a>
                    <a href="#contact">Контакты</a>
                </nav>
            </div>
        </header>
    );
}
