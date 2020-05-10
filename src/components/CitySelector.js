import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';

import { forecastActions, currentActions } from '../actions';

class CitySelectorComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            city: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        if (!this.props.loading) {
            const { city } = this.state;
            this.props.changeCity(city);
        }
    }

    render() {
        const loading = this.props.loading;
        return (
            <div>
                <h2>City weather and forecast</h2>
                <form onSubmit={this.handleSubmit} name="form">
                    <div className="form-group">
                        <label htmlFor="city">City</label>
                        <select onChange={this.handleChange} className="form-control username" name="city">
                            <option value="">Current</option>
                            <option value="london,UK">London</option>
                            <option value="tokyo,JP">Tokyo</option>
                            <option value="New York,US">New York</option>
                            <option value="Seoul,KR">Seoul</option>
                            <option value="Paris,FR">Paris</option>
                        </select>
                        {/* <input onChange={this.handleChange} type="text" className="form-control username" name="city" /> */}
                    </div>
                    <div className="form-group">
                        <button className={"btn btn-primary" + (loading ? ' disabled' : '')}>Change</button>
                    </div>
                </form>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { forecast, current } = state;
    return { loading: forecast.loading || current.loading };
}

function mapDispatchToProps(dispatch) {
    return {
        changeCity: (city) => {
            dispatch(forecastActions.getForecast(city));
            dispatch(currentActions.getCurrent(city));
        }
    };
}

export const CitySelector = connect(mapStateToProps, mapDispatchToProps)(CitySelectorComponent);