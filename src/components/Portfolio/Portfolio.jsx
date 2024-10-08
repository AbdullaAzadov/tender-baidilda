import style from "./Portfolio.module.css";
import { screens } from "../../utils/screens";
import { TrialLessonLink } from "../../utils/links";
import LinkButton from "../../ui/LinkButton/LinkButton";
import { useEffect, useState } from "react";
import ImageModal from "../ImageModal/ImageModal";

export default function Portfolio() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [curIndex, setCurIndex] = useState(0);

    useEffect(() => {
        document.body.style.overflow = isModalOpen ? "hidden" : "";
    }, [isModalOpen]);

    function handleClickImage(index) {
        setCurIndex(index);
        setIsModalOpen(true);
    }

    return (
        <section className={style.portfolio} id="portfolio">
            <div className="container">
                <div className="title">
                    <h3>
                        <span>Скрины</span> уроков
                    </h3>
                </div>
                <ul className="cards">
                    {screens.map((link, i) => (
                        <li
                            className={style.screen}
                            key={i}
                            onClick={() => handleClickImage(i)}
                        >
                            <img src={link} alt="screenshot" />
                        </li>
                    ))}
                </ul>

                <div className="flex-center">
                    <LinkButton link={TrialLessonLink.link}>
                        {TrialLessonLink.body}
                    </LinkButton>
                </div>
            </div>
            {isModalOpen && (
                <ImageModal
                    onClose={() => setIsModalOpen(false)}
                    imgList={screens}
                    curIndex={curIndex}
                />
            )}
        </section>
    );
}
