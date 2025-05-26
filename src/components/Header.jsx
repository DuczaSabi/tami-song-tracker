import { useRef } from "react";
import data from "../tami-data.json";

export default function Header({ week, changeWeek }) {
    const headerRef = useRef(null);

    function closeHeader(newWeek) {
        if (headerRef.current) {
            headerRef.current.style.top = "-100vh";
            changeWeek(newWeek);
        }
    }

    function openHeader() {
        if (headerRef.current) {
            headerRef.current.style.top = "0vh";
        }
    }

    return (
        <header ref={headerRef}>
            {data.map((weekData, index) => {
                const weekKey = Object.keys(weekData)[0]; // Get the key for the current week
                return (
                    <p key={index} onClick={() => closeHeader(weekKey)}>
                        {weekKey}
                    </p>
                );
            })}
            <h3 onClick={openHeader}>
                {week}
            </h3>
        </header>
    );
}