import "./Card.css"


const  Card = props => {
    const { card, handleDeleteCard, handleUpdateCard  } = props;
    return ( 
        <>
            <li className="card">
                <img className="card__image" src={card.link} alt="" />
                <button
                aria-label="Remove" 
                className="card__delete-button"
                type="button"
                onClick={() => {
                    console.log(card);
                    handleDeleteCard(card);
                }}
                ></button>
                <div className="card__description">
                <h2 className="card__title">{card.name}</h2>
                <button aria-label="Like" className={
                    card.like
                        ? "card__like-button card__like-button_is-active"
                        : "card__like-button"
                } type="button"
                onClick={() => {
                    handleUpdateCard(card);
                }}
                ></button>
                </div>
            </li>
        </>
     );
}

export default Card;