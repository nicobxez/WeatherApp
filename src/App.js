import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import { Grid, Col, Row } from 'react-flexbox-grid';
import './App.css';
import LocationList from './components/LocationList';
import ForecastExtended from './components/ForecastExtended';

const cities = [
  'Mar del Plata,ar',
  'Buenos Aires,ar',
  'Santiago,cl',
  'Brasil,br',
  'Madrid,es',
]

class App extends Component {

  constructor() {
    super();
    this.state = { city: null };
  };

  handleSelectedLocation = city => { this.setState({ city }) };

  render() {
    const { city } = this.state;

    return (
      <Grid>

        <Row>
          <AppBar>
            <Toolbar>
              <Typography title='title' color='inherit'> Weather App </Typography>
            </Toolbar>
          </AppBar>
        </Row>

        <Row>
          <Col xs={12} md={6}>
            <LocationList cities={cities} onSelectedLocation={ this.handleSelectedLocation }></LocationList>
          </Col>
          <Col xs={12} md={6}>
            <Paper elevation={4}>
              <div className="details">
                { city && <ForecastExtended city={ city }></ForecastExtended> }
              </div> 
            </Paper>
          </Col>
        </Row>

      </Grid>
    );
  }
}

export default App;