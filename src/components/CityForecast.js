import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import LoadingSpinner from './LoadingSpinner';
import ErrorDisplay from './Error';
import MiniWeather from './MiniWeather';

class CFComponent extends Component {
    stringify = (e) => JSON.stringify(e);

    render() {
        const {forecast, loading, error} = this.props.forecast;
        const forecastW = [];
        if (forecast && forecast.list) {
            const groupedByDay = forecast.list.reduce((rv, f) => {
                const groupBy = String(f['dt_txt']).substr(0, 10);
                (rv[groupBy] = rv[groupBy] || []).push(f);
                return rv;
              }, {});
            Object.keys(groupedByDay).forEach(k =>{
                const report = groupedByDay[k];
                const mostFound = (array) => {
                    if (array.length) {
                        const foundTimes = {};
                        let max = array[0];
                        array.forEach(e => {
                            if (typeof foundTimes[e] === 'undefined')
                                foundTimes[e] = 0;
                            foundTimes[e]++;
                            if (foundTimes[e] > foundTimes[max])
                                max = e;
                        });
                        return max;
                    } else {
                        return null;
                    }
                };
                forecastW.push({day: k, report, estimated: {
                    temp: (report.reduce((total, r) => {
                        return total + r.main.temp;
                    }, 0) / report.length).toFixed(2),
                    weather: mostFound(report.map(r => r.weather[0].main))
                }});
            });
        }
        return (
            <div style={{marginTop: "30px"}}>
                <LoadingSpinner loading={loading} text="forecast"/>
                <ErrorDisplay error={error} />
                {!!forecastW.length && (
                    <p className="lead"><b>Forecast for the upcoming days:</b></p>
                )}
                {forecastW.map(fw => (
                    <MiniWeather key={fw.day} width={(100/forecastW.length)} weather={fw}/>
                ))}
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { forecast } = state;
    return { forecast };
}

export const CityForecast = connect(mapStateToProps)(CFComponent);