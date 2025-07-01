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

// { "Week 15": [
//     {
//         "title": "Désenchantée",
//         "artist": ["Kate Ryan"],
//         "spotify": "https://open.spotify.com/track/4yOU9FaCmFFo2qfy1FHIe3?si=486758d391694ba6",
//         "youtube": "https://music.youtube.com/watch?v=2Az_Ux2uNmk&si=tC5xAYGdWuCSWr6I"
//     },
//     {
//         "title": "All My Friends Are Nobodies",
//         "artist": ["zebrahead"],
//         "spotify": "https://open.spotify.com/track/451h1BW2NaOBnMXnbRJhkG?si=c1dbf30dd0bb4c0e",
//         "youtube": "https://music.youtube.com/watch?v=FgVNKre5wqM&si=1_WEY23IhLAUFVhX"
//     },
//     {
//         "title": "Life Support",
//         "artist": ["American Nightmare"],
//         "spotify": "https://open.spotify.com/track/3uYM4wkn9YGSF3Keiu7BjD?si=70d4c7711ca54062",
//         "youtube": "https://music.youtube.com/watch?v=VXTexJTgEHw&si=WrMTy0WXBnEvcUnK"
//     },
//     {
//         "title": "Beautiful Madness",
//         "artist": ["Michael Patrick Kelly"],
//         "spotify": "https://open.spotify.com/track/4tfLFDGypUWad5AT6772If?si=9a4ce6f79dd544e9",
//         "youtube": "https://music.youtube.com/watch?v=WIeSvGBpUsA&si=V_m7S53jMDTnuDgo"
//     },
//     {
//         "title": "You Love Who You Love",
//         "artist": ["Zara Larsson"],
//         "spotify": "https://open.spotify.com/track/3bWHOxTJpHL6fyATpYFQXl?si=64a75dac510c46cb",
//         "youtube": "https://music.youtube.com/watch?v=2KgtpVK5w0k&si=8Ob_aOZ3yvbXlHQM"
//     },
//     {
//         "title": "Perfect Places",
//         "artist": ["Lorde"],
//         "spotify": "https://open.spotify.com/track/7ARveOiD31w2Nq0n5FsSf8?si=3d0e94535cc248de",
//         "youtube": "https://music.youtube.com/watch?v=Cuni8n0bwx0&si=MCh2-hJHgI7LQJPT"
//     },
//     {
//         "title": "Fame is a Gun",
//         "artist": ["Addison Rae"],
//         "spotify": "https://open.spotify.com/track/7B3BwNecBhKvNwSMOOl7Gk?si=4939a0f881064a11",
//         "youtube": "https://music.youtube.com/watch?v=APvEk-IEGJ4&si=XQeyOjO_z4hwPuRF"
//     }
//     ]
// }

// { "Week 15": [
//     {
//         "title": "Pók",
//         "artist": ["Carson Coma"],
//         "spotify": "https://open.spotify.com/track/2lbkEFkHEtKNOL1ZYwG7zn?si=2310e0412fbf45f6",
//         "youtube": "https://music.youtube.com/watch?v=2IfIsBh_4zE&si=yLiqOQZ3cM5ct4Xu"
//     },
//     {
//         "title": "Confidence",
//         "artist": ["Ocean Alley"],
//         "spotify": "https://open.spotify.com/track/61YldFgqyxAvqGzZbOg1yY?si=0a9a4c87572644cd",
//         "youtube": "https://music.youtube.com/watch?v=BlcvsriI8ts&si=w3_j7EBQeU3zsBk1"
//     },
//     {
//         "title": "Shelter",
//         "artist": ["Porter Robinson", "Madeon"],
//         "spotify": "https://open.spotify.com/track/3lJyZMz60jW3TTGeOFUrCd?si=5c22ab65ce214b84",
//         "youtube": "https://music.youtube.com/watch?v=vxVig1gPnLo&si=CZoMSD4eWdGLHHxT"
//     },
//     {
//         "title": "Opening Sequence",
//         "artist": ["TOMORROW X TOGETHER"],
//         "spotify": "https://open.spotify.com/track/3gChfwiB0yrnZRnlJ5Oq9E?si=4eae2ab12c9b42b0",
//         "youtube": "https://music.youtube.com/watch?v=3bEAQmFy5Xw&si=SHSdVxBava1_U7cc"
//     },
//     {
//         "title": "Man Down",
//         "artist": ["Knox"],
//         "spotify": "https://open.spotify.com/track/4luQpgdQDlshLspiKfkmPI?si=0dbfb716bdaa4f7d",
//         "youtube": "https://music.youtube.com/watch?v=ujUTOofsAZo&si=CjYqqNLcbC1hGG3G"
//     },
//     {
//         "title": "Maybe",
//         "artist": ["half alive"],
//         "spotify": "https://open.spotify.com/track/07anDhBUBDb8YOM849Jjr4?si=441577f49808414a",
//         "youtube": "https://music.youtube.com/watch?v=owhCsufGXZM&si=rxH4dc3czmwxkG-k"
//     },
//     {
//         "title": "Bon Voyage",
//         "artist": ["ONE OK ROCK"],
//         "spotify": "https://open.spotify.com/track/57rt6Jj7woE21ae3Ml2vw8?si=6b10fb255dc84e75",
//         "youtube": "https://music.youtube.com/watch?v=gtFgwMhAYjQ&si=q8pV6kn78gDMlkwr"
//     }
//     ]
// }