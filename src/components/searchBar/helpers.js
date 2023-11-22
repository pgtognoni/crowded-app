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
    try {
        const response = await axios.get(
            `https://rest.bandsintown.com/artists/${artistName}/events?app_id=123`
        );

        const events = response.data;

        const updatedEvents = events.map(event => {
            // Check if the object has a nested 'options' property
            if (event.options && typeof event.options === 'object') {
                event.options.favorite = false;
            } else {
                event['favorite'] = false;
            }

            return event;
        });

        return updatedEvents;
    } catch (error) {
        console.error('Error fetching events:', error);
        throw error;
    }
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

export function updateEvents(events,favorites){
    const eventsArr = [...events]
    const favArr = [...favorites]
    eventsArr.forEach(event => {
        const index = favArr.findIndex(fav => fav.id === event.id)
        if (index !== -1) {
            event.favorite = true
        }
    })
    return eventsArr
}