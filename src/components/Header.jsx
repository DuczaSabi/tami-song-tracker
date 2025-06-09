import { useRef, useEffect } from "react";
import data from "../tami-data.json";

export default function Header({ setWeek, player, setPlayer }) {
    const headerRef = useRef(null);

    useEffect(() => {
        const dropdown = document.getElementById("weekDropdown");
        if (dropdown) {
            const handleChange = (event) => setWeek(event.target.value);
            dropdown.addEventListener("change", handleChange);

            return () => {
                dropdown.removeEventListener("change", handleChange);
            };
        }
    }, []);

    function changePlayer() {
        player == "YouTube" ? setPlayer("Spotify") : setPlayer("YouTube")
    }

    return (
        <header ref={headerRef}>
            {/* <img src={`${process.env.PUBLIC_URL}/icons/${player}.png`} className="player-icon" onClick={changePlayer}/> */}
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