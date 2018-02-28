import React from "react";

const DailyWeather = props => {
    return(
        <div>
            <ul>
                <li>{props.time}</li>
                <li>{props.summary}</li>
                <li>{props.temperatureHigh}</li>
                <li>{props.temperatureLow}</li>
            </ul>
        </div>
    )};

export default DailyWeather;
