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
            {data.map((weekData, index) => (
                <p key={index} onClick={() => closeHeader(index + 1)}>
                    {Object.keys(weekData)[0]}
                </p>
            ))}
            <h3 onClick={openHeader}>Week {week}</h3>
        </header>
    );
}