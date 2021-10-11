import './App.css';
import { CssBaseline } from '@mui/material';
import { useState, useEffect } from 'react';
import { Route } from "react-router-dom";
import Homepage from './components/Homepage';
import SeasonPage from './components/SeasonPage';
import SeasonSelect from './components/SeasonSelect';
import DriverSelect from './components/DriverSelect';
import Dashboard from './components/Dashboard';

function App() {
  <CssBaseline />
  
  const [raceData, setRaceData] = useState([]) //race data for the season
  const [selectedSeason, setSelectedSeason] = useState() //setting the selected season
  const [selectedDriver, setSelectedDriver] = useState() //setting the selected driver
  const [driverId, setDriverId] = useState() //setting the selected driverId for 
  const [roundIndex, setRoundIndex] = useState() //setting the selected roundIndex
  const [roundNumber, setRoundNumber] = useState() //setting the selected roundIndex

  var url = `https://ergast.com/api/f1/${selectedSeason}/drivers/${driverId}/results.json?`
  console.log("raceDataurl", url)
  
  useEffect(() => {
  fetch(`https://ergast.com/api/f1/${selectedSeason}/drivers/${driverId}/results.json?`)
      .then((response) => response.json())
      .then((races) => {
        console.log("raceData", races);
        setRaceData(races)
      });
  }, [driverId, selectedSeason]);
  
  console.log("Appside Race Data", raceData)
  console.log("Appside DriverID", driverId)
  console.log("Appside Selected Season", selectedSeason)
  console.log("Appside roundIndex", roundIndex)
  console.log("Appside roundNumber", roundNumber)
  
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
        <SeasonPage selectedSeason={selectedSeason} setSelectedSeason={setSelectedSeason} selectedDriver={selectedDriver} setSelectedDriver={setSelectedDriver} raceData={raceData} setRoundIndex={setRoundIndex} setRoundNumber={setRoundNumber}/>
      </Route>
      <Route path="/dashboard">
        <Dashboard raceData={raceData} selectedDriver={selectedDriver} selectedSeason={selectedSeason} roundIndex={roundIndex} setRoundIndex={setRoundIndex} roundNumber={roundNumber} setRoundNumber={setRoundNumber}/>
      </Route>
    </div>
  );
}

export default App;
