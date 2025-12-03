import Header from "./Componentes/Header/Header";
import { AppContext } from "./Componentes/Context/AppContext";
import "./App.css";
import Main from "./Componentes/Main/Main";
import api from "./services/Api";
import Footer from "./Componentes/Footer/Footer";
import { useEffect, useState } from "react";

function App() {
  const [cards, setCards] = useState([]);
  console.log(cards); 
  useEffect(() => {
    (async () => {
      await api
        .getAllCards().then((data) => {
          setCards(
            data.map(card => ({
              ...card,
              like: card.like === true || card.like === "true"
            }))
          );

        }).catch((error) => {
          console.error("Error getting Cards: " + error);
        })
    }) ();
  }, []);

  async function handleDeleteCard(card) {
    await api.deleteCard(card._id)
    .then(() => {
      const newArray = cards.filter(
        (currentCard) => currentCard._id !== card._id
      );
      setCards(newArray);
    })
    .catch((error) => console.error(error));
  }

  async function handleUpdateCard(card) {
    const likeinvertido = !card.like;
    await api
      .updateCard(card._id, likeinvertido)
      .then(() => {
        const temp = {...card, like: likeinvertido};
        console.log(temp);
        
        setCards ((prev) => {
          return prev.map((element) => {
            return element._id === temp._id ? temp: element;
          })
      })
      })
      //.catch((error) => console.error(error));

      
  }

  return (
    <>  
    <AppContext.Provider value={{ cards, setCards }}>
        <div className="app">
          <div className="app__content">
            <Header />
            <Main cards={cards} handleDeleteCard={handleDeleteCard} handleUpdateCard={handleUpdateCard}/>
            <Footer />
          </div>
        </div>
      </AppContext.Provider>
    </>
  );
}

export default App;
