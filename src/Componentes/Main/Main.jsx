import "./Main.css";
import Profile from "./Profile/Profile";
import CardContainer from "./CardContainer/CardContainer";
import Card from "./CardContainer/Card/Card";


function Main(props) {
    const { cards, handleDeleteCard, handleUpdateCard } = props;
    return ( 
        <main className="main">
            <section className="traveler">
                <Profile />
                </section>
            <section className="gallery">
                <CardContainer cards = {cards} handleDeleteCard={handleDeleteCard} handleUpdateCard={handleUpdateCard} />
            </section>
        </main>
     );
}

export default Main;
