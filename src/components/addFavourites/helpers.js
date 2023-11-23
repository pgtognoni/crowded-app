import { addFavorite, removeFavorite } from '../../firebase/helpers'

export function filterArray(array,event) {
    const favArr = [...array]
    let eventFav = {...event}

    if (!eventFav.favorite) {
        eventFav.favorite = true
    } else {
        eventFav.favorite = false
    }

    const index = favArr.findIndex(fav => fav.id === eventFav.id)
    const userId = window.localStorage.getItem('WITuserID')
    if (index !== -1) {
        favArr.splice(index, 1)
        removeFavorite(userId,eventFav)
    } else {
        favArr.push(eventFav)
        addFavorite(userId, eventFav)
    }

    return favArr
}

export function filterEvent(array,event) {
    const eventsArr = [...array]
    let eventFav = {...event}

    if (!eventFav.favorite) {
        eventFav.favorite = true
    } else {
        eventFav.favorite = false
    }

    const index = eventsArr.findIndex(fav => fav.id === eventFav.id)

    if (index !== -1) {
        eventsArr[index] = eventFav
    }

    return eventsArr
}

export function getArtistName(event) {
    if(event.artist){
        return event.artist.name
    } else {
        return event.lineup[0]
    }
}