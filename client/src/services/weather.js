import Axios from 'axios';

export const getWeather = (lat, lon) => {
    const url = `/forecast/${lat}, ${lon}`;
    return Axios.get(url);
}