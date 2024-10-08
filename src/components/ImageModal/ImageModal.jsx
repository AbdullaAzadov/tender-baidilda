import { useEffect, useState } from "react";
import style from "./ImageModal.module.css";

export default function ImageModal({ onClose, imgList, curIndex }) {
    const windowTop = `${window.pageYOffset}px`;
    const [current, setCurrent] = useState(curIndex || 0);

    function handleDecrement(event) {
        event.stopPropagation();
        setCurrent((v) => (v - 1 >= 0 ? v - 1 : imgList.length - 1));
    }

    function handleIncrement(event) {
        event.stopPropagation();
        setCurrent((v) => (v + 1 >= imgList.length ? 0 : v + 1));
    }

    useEffect(() => {
        function handleByArrows(e) {
            if (e.key === "ArrowLeft")
                setCurrent((v) => (v - 1 >= 0 ? v - 1 : imgList.length - 1));
            if (e.key === "ArrowRight")
                setCurrent((v) => (v + 1 >= imgList.length ? 0 : v + 1));
        }

        document.addEventListener("keyup", handleByArrows);
        return () => document.removeEventListener("keyup", handleByArrows);
    }, []);

    return (
        <div
            className={style.wrapper}
            style={{ top: windowTop }}
            onClick={onClose}
        >
            <button className={style.prev} onClick={handleDecrement}>
                ▶
            </button>
            <div className={style.media}>
                <span>🗙</span>
                <img
                    src={imgList[current]}
                    alt="Failed to load image"
                    onClick={handleIncrement}
                />
                <p>
                    {current + 1} of {imgList.length}
                </p>
            </div>
            <button className={style.next} onClick={handleIncrement}>
                ▶
            </button>
        </div>
    );
}
