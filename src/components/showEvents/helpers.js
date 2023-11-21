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

export function getLineUp(event){
    return event.lineup.map((artist, index) => {
        return(
        <div key={index} className='row'>
            <p className='col-3 m-0'>Playing: </p>
            <div className='col-6 d-flex'>  
                <p key={index} className='m-0'>{artist}</p>
            </div>
        </div>
        )
    })
}

export function getOffers(event) {
    return event.offers.map((offer, index) => {   
        return(
        <div key={index} className='row'>
            <p className='col-3 m-0'>{offer.type}: </p>
            <div className='col-6 d-flex'>  
                <span> <a href={offer.url} target='_blank' rel='noreferrer'>{offer.status}</a></span>
            </div>
        </div>
        )
    })
}

export function getSaleDate(event){
    return(
        <div className='row'>
            <p className='col-3 m-0'>Sale starts: </p>
            <div className='col-6 d-flex'>  
                <p className='m-0'>{getDatetimeString(event.on_sale_datetime)} {getStarTime(event.on_sale_datetime)}</p>
            </div>
        </div>
    )
}

export function getAddress(event) {
    return(
        <div className='row'>
            <p className='col-3 m-0'>Address: </p>
            <div className='col-6 d-flex'>  
                <p className='m-0'>{formatAddress(event)}</p>
            </div>
        </div>
    )
}
export function formatAddress(event) {
    return `${event.venue.street_address}, ${event.venue.city},  ${event.venue.postal_code}, ${event.venue.country}`
}