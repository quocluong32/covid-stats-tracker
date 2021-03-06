import { useEffect, useState } from 'react';
import Table from './Table';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container'



function RegionalStats() {
  
  const [continents, setContinents] = useState([]);
  // const [states, setStateData] = useState([]);


  // get worldwide data
  useEffect(() => {

    fetch('https://api.caw.sh/v3/covid-19/continents')
    .then(response => response.json())
    .then(data => {
      setContinents(data)
    })

    // fetch('https://api.caw.sh/v3/covid-19/continents')
    // .then(response => response.json())
    // .then(data => {
    //   setContinents(data)
    // })

  }, []);

  return (
    <>
      <CssBaseline />
      <Container maxWidth="md">
      <Table continents={continents} />
      </Container>
    </>

  );
}

export default RegionalStats;
