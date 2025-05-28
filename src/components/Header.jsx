import { useRef, useEffect } from "react";
import data from "../tami-data.json";

export default function Header({ changeWeek }) {
    const headerRef = useRef(null);

    useEffect(() => {
        const dropdown = document.getElementById("weekDropdown");
        if (dropdown) {
            const handleChange = (event) => changeWeek(event.target.value);
            dropdown.addEventListener("change", handleChange);

            // Cleanup the event listener when the component unmounts
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
                    const weekKey = Object.keys(weekData)[0]; // Get the key for the current week
                    return (
                        <option key={index} value={weekKey}>
                            {weekKey}
                        </option>
                    );
                })}
            </select>
        </header>
    );
}