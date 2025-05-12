import tami_data from "../tami-data.json";
import xabi_data from "../xabi-data.json";

export default function SongList({ week, person }) {
    const weekKey = typeof week === "string" && week.toLowerCase() === "extravaganza" 
        ? "Extravaganza Week" 
        : `Week ${week}`;

    let weekData = [];
    if (person === "tami") {
        weekData = tami_data.find(item => item[weekKey]);
    } else {
        weekData = xabi_data.find(item => item[weekKey]);
    }
    const songs = weekData ? weekData[weekKey] : [];

    return (
        <div className="song-list">
            {songs.map((song, index) => (
                <div key={index} className="song">
                    <img src={`${process.env.PUBLIC_URL}/images/${song}.jpeg`} alt={song} />
                    <p>{song}</p>
                </div>
            ))}
        </div>
    );
}