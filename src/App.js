import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import SongList from './components/SongList';

function App() {
  const [week, setWeek] = useState("Week 1");
  // const [player, setPlayer] = useState("YouTube");

  return (
    <div className="App">
      <Header week={week} changeWeek={setWeek}/>
      <SongList week={week} person="tami"/>
      <SongList week={week} person="xabi"/>
    </div>
  );
}

export default App;