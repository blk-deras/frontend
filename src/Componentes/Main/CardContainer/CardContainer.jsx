import Card from "./Card/Card";
import "./CardContainer.css"

const CardContainer = (props) => {
    const { cards, handleDeleteCard, handleUpdateCard } = props

    console.log("Dentro de cards");
    console.log(cards);
    return (  
        <>
            <div className="card-container">
                <ul className="card-container__list">
                    {cards.map((card) => (
                        <Card card={card} handleDeleteCard={handleDeleteCard} handleUpdateCard={handleUpdateCard} />
                    ))}
                </ul>
            </div>
        </>
    );
}
 
export default CardContainer;