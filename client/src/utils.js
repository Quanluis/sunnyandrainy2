export const isEmptyObject = (obj) => Object.keys(obj).length === 0;

export const convertTimestamp = (seconds) => {
    const d = new Date(seconds * 1000); // con to ms
    //format mm/dd/YYYY HH:MM
    const year = d.getFullYear();
    const month = d.getMonth();
    const day = d.getDate();
    return `${month + 1}/${day}/${year}`;
} 