import React from 'react';
function MiniWeather(props) {
    return (
        <>
            <div style={{display: 'inline-block', textAlign: "center", width: props.width + '%'}} className="alert alert-info" role="alert">
                {props.weather.day}<br/>
                <p>
                    Estimated weather: {props.weather.estimated.weather}, {props.weather.estimated.temp}ºC
                </p>
            </div>
        </>
    );
}

export default MiniWeather;