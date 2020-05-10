import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import LoadingSpinner from './LoadingSpinner';
import ErrorDisplay from './Error';

class CCWComponent extends Component {
    stringify = (e) => JSON.stringify(e);

    render() {
        const {current, loading, error} = this.props.current;
        return (
            <div>
                <LoadingSpinner loading={loading} text="current weather"/>
                <ErrorDisplay error={error} />
                {current && (
                    <>
                        <p className="lead">
                            The weather is {current.weather[0].main} with {current.weather[0].description}
                        </p>
                        <p className="lead">
                            Current temp: {current.main.temp} ºC
                        </p>
                    </>
                )}
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { current } = state;
    return { current };
}

export const CityCurrentWeather = connect(mapStateToProps)(CCWComponent);