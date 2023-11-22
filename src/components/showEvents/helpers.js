export function getDatetimeString(dateString) {
    const options = { month: 'short', day: 'numeric', year: 'numeric' };
    const date = new Date(dateString);
    return isNaN(date.getTime())  ? 'TBA' : date.toLocaleDateString(undefined, options);
}

export function getStarTime(dateString) {
    const options = { hour: 'numeric', minute: 'numeric' };
    const date = new Date(dateString);
    return isNaN(date.getTime())  ? '' : date.toLocaleTimeString(undefined, options);
}

export function formatAddress(event) {
    return `${event.venue.street_address}, ${event.venue.city},  ${event.venue.postal_code}, ${event.venue.country}`
}

export function handleIntersection(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        } else {
            entry.target.classList.remove('active');
        }
    });
}
