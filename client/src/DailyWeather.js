import React from "react";
import {convertTimestamp} from "./utils"
import './App.css'

const DailyWeather = props => {
    return(
        <div>
            <ul>
                <li>{convertTimestamp(props.time)}</li>
                <li>{props.summary}</li>
                <li>{props.temperatureHigh}</li>
                <li>{props.temperatureLow}</li>
            </ul>
        </div>
    )};

export default DailyWeather;
