import "./Card.css"

function Card ({image, name, position, biography}) {

    return (
        <>
        <div className="card">
                <img src={image} alt={name} />
            <div className="card-infos">
                <h3>{name}</h3>
                <h4>{position}</h4>
                <p>{biography}</p>
            </div>
        </div>
        </>
    )
}

export default Card;