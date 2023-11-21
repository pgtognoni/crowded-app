import axios from 'axios';

export const searchApi = async (artistName) => {
    try {
        const resp = await axios.get(
            `https://rest.bandsintown.com/artists/${artistName}?app_id=123`
        )
        if (resp.status === 200 && resp.data) {
            const events = await searchEvents(artistName)
        return {
            artist: resp.data,
            events: events
        }
        }
    } catch(error) {
        console.log(error)
        return error
    }
}

export const searchEvents = async (artistName) => {
    const events = await axios.get(
        `https://rest.bandsintown.com/artists/${artistName}/events?app_id=123`
    )
    return events.data
}

export function encodeSpecialCharacters(inputString) {
    // Define the mapping of special characters to their corresponding codes
    const characterMap = {
        '/': '%252F',
        '?': '%253F',
        '*': '%252A',
        '"': '%27C"'
    };

    // Replace special characters in the input string with their codes
    const encodedString = inputString.replace(/[/?*"]/g, match => characterMap[match]);
    return encodedString;
}