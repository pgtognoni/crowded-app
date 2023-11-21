export function filterArray(array,event) {
    const favArr = [...array]
    favArr.filter(fav => fav.id === event.id).length > 0 ? favArr.splice(favArr.indexOf(event), 1) : favArr.push(event)
    return favArr
}