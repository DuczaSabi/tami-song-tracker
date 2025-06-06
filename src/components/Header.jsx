import { useRef, useEffect } from "react";
import data from "../tami-data.json";

export default function Header({ changeWeek }) {
    const headerRef = useRef(null);

    useEffect(() => {
        const dropdown = document.getElementById("weekDropdown");
        if (dropdown) {
            const handleChange = (event) => changeWeek(event.target.value);
            dropdown.addEventListener("change", handleChange);

            return () => {
                dropdown.removeEventListener("change", handleChange);
            };
        }
    }, []);

    return (
        <header ref={headerRef}>
            <label htmlFor="weekDropdown">Select a week</label>
            <select id="weekDropdown" name="options">
                {data.map((weekData, index) => {
                    const weekKey = Object.keys(weekData)[0];
                    return (
                        <option key={index} value={weekKey}>
                            {weekKey}
                        </option>
                    );
                })}
            </select>
            {/* <img src={`${process.env.PUBLIC_URL}/icons/Stats.png`} className="stats-icon"/> */}
        </header>
    );
}