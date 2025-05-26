import tami_data from "../tami-data.json";
import xabi_data from "../xabi-data.json";

export default function SongList({ week, person }) {
    // Determine which dataset to use based on the person
    const data = person === "tami" ? tami_data : xabi_data;

    // Find the week data using the week key
    const weekData = data.find(item => item[week]) || {};
    const songs = weekData[week] || [];

    return (
        <div className="song-list">
            {songs.length > 0 ? (
                songs.map((song, index) => (
                    <div key={index} className="song">
                        <img src={`${process.env.PUBLIC_URL}/images/${song}.jpeg`} alt={song} />
                        <p>{song}</p>
                    </div>
                ))
            ) : (
                <p>No songs available for {week}</p>
            )}
        </div>
    );
}