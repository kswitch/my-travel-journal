import locationIcon from './../images/icons/location-icon.png'

export default function Journey(props) {
    const {title, location, googleMapsUrl, startDate, endDate, description, imageUrl} = props
    return (
        <div className="journey-card">
            <img className="journey-card-img" src={imageUrl} alt={`Picture of ${title}`} />
            <div className="journey-card-info">
                <div className="journey-card-info-div">
                    <img className="journey-card-info-div-location-icon" src={locationIcon} alt="Location Icon"/>
                    <p className="journey-card-info-div-location">{location}</p>
                    <a className="journey-card-info-div-map-link" href={googleMapsUrl} target='_blank' >View on Google Maps</a>
                </div>
                <p className="journey-card-info-title">{title}</p>
                <p className="journey-card-info-dates">{startDate} - {endDate}</p>
                <p className="journey-card-info-description">{description}</p>
            </div>
        </div>
    )
}