import './App.css';
import { CssBaseline } from '@mui/material';
import { useState, useEffect } from 'react';
import { Route } from "react-router-dom";
import Homepage from './components/Homepage';
import SeasonPage from './components/SeasonPage';
import SeasonSelect from './components/SeasonSelect';
import DriverSelect from './components/DriverSelect';


function App() {
  <CssBaseline />
  
  const [raceData, setRaceData] = useState([]) //race data for the season
  const [selectedSeason, setSelectedSeason] = useState() //setting the selected season
  const [selectedDriver, setSelectedDriver] = useState() //setting the selected driver
  const [driverId, setDriverId] = useState() //setting the selected driverId for 
  
  var url = `https://ergast.com/api/f1/${selectedSeason}/drivers/${driverId}/results.json?`
  console.log("raceDataurl", url)
  
  useEffect(() => {
  fetch(`https://ergast.com/api/f1/${selectedSeason}/drivers/${driverId}/results.json?`)
      .then((response) => response.json())
      .then((races) => {
        console.log("raceData", races);
        setRaceData(races)
      });
  }, [driverId]);
  
  console.log("Appside Race Data", raceData)
  console.log("Appside DriverID", driverId)
  console.log("Appside Selected Season", selectedSeason)
  
  return (
    <div className="App">
      <Route exact path="/">
        <Homepage />
      </Route>
      <Route path="/seasonselect">
        <SeasonSelect selectedSeason={selectedSeason} setSelectedSeason={setSelectedSeason} />
      </Route>
      <Route path="/driverselect">
        <DriverSelect selectedDriver={selectedDriver} setSelectedDriver={setSelectedDriver} setSelectedSeason={setSelectedSeason} selectedSeason={selectedSeason} setDriverId={setDriverId} />
      </Route>
      <Route path="/seasondisplay">
        <SeasonPage selectedSeason={selectedSeason} selectedDriver={selectedDriver} raceData={raceData} />
      </Route>
      

    </div>
  );
}

export default App;