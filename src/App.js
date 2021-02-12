import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import { CitySelector } from './components/CitySelector';
import { currentActions, forecastActions } from './actions';
import { CityCurrentWeather } from './components/CityCurrentWeather';
import { CityForecast } from './components/CityForecast';

export class App extends React.Component {
  constructor(props) {
      super(props);
      const { dispatch } = this.props;
      dispatch(currentActions.getCurrent());
      dispatch(forecastActions.getForecast());
  }

  render() {
      return (
        <div style={{marginTop: "30px"}} className="container">
          <CitySelector/>
          <CityCurrentWeather/>
          <CityForecast/>
        </div>
      );
  }
}

export const ConnectedApp = connect()(App);