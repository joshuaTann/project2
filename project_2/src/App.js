import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [raceData, setRaceData] = useState([])


  useEffect(() => {
    fetch("https://ergast.com/api/f1/2008/drivers/hamilton/results.json?")
      .then((response) => response.json())
      .then((races) => {
        console.log("raceData", races);
        setRaceData(races)
      });
  },[]);


  return (
    <div className="App">
      <h1>Formula 1</h1>
      <div>
          Hamilton Result: {raceData?.MRData?.RaceTable.Races[0].Results[0].position}
      </div>
    </div>
  );
}

export default App;
