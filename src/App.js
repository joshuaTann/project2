import './App.css';
import { CssBaseline } from '@mui/material';
import { useState, useEffect } from 'react';
import Homepage from './components/Homepage';
import SeasonPage from './components/SeasonPage';
import SeasonSelect from './components/SeasonSelect';
import DriverSelect from './components/DriverSelect';

function App() {
  <CssBaseline />

  const [raceData, setRaceData] = useState([])


  useEffect(() => {
    fetch("https://ergast.com/api/f1/2008/drivers/hamilton/results.json?")
      .then((response) => response.json())
      .then((races) => {
        console.log("raceData", races);
        setRaceData(races)
      });
  }, []);


  return (
    <div className="App">
      {/* <Homepage /> */}
      {/* <SeasonSelect /> */}
      <DriverSelect />
      {/* <SeasonPage raceData={raceData} /> */}

    </div>
  );
}

export default App;
