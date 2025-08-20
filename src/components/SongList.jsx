import tami_data from "../tami-data.json";
import xabi_data from "../xabi-data.json";

export default function SongList({ week, person, player }) {
    const data = person === "tami" ? tami_data : xabi_data;
    const weekData = data.find(item => item[week]) || {};
    const songs = weekData[week] || [];

    return (
        <div className="song-list">
            {songs.length > 0 ? (
                songs.map((song, index) => (
                    <div key={index} className="song" onClick={() => window.open(player === "YouTube" ? song.youtube : song.spotify)}>
                        <img
                            src={`${process.env.PUBLIC_URL}/images/${song.title}.jpeg`}
                        />
                        <div className="song-details">
                            <h3>{song.title}</h3>
                            <p>
                                {song.artist.map((artist, index) =>
                                    index === 0
                                        ? artist
                                        : `, ${artist}`
                                    )
                                }
                            </p>
                        </div>
                    </div>
                ))
            ) : (
                <p>No songs available for {week}</p>
            )}
        </div>
    );
}