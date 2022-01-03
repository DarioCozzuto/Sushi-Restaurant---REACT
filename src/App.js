import './App.css';
import Navbar from './components/navbar.js';
import Card from './components/card.js';

import California from './images/california.png';
import Dragon from './images/dragon.png';
import Dynamite from './images/dynamite.png';
import Philadelphia from './images/philadelphia.png';
import Rainbow from './images/rainbow.png';
import Shrimp from './images/shrimp.png';

import React, {Component} from 'react';

class App extends Component {

  state = {
    cards: [
      { id: 0, Img: California, Name: "California", Price: 1.40, quantity: 0 },
      { id: 1, Img: Dragon, Name: "Dragon", Price: 1.60, quantity: 0 },
      { id: 2, Img: Dynamite, Name: "Dynamite", Price: 3.10, quantity: 0 },
      { id: 3, Img: Philadelphia, Name: "Philadelphia", Price: 1.50, quantity: 0 },
      { id: 4, Img: Rainbow, Name: "Rainbow", Price: 1.80, quantity: 0 },
      { id: 5, Img: Shrimp, Name: "Shrimp", Price: 2.40, quantity: 0 },
    ]
  }

  handleDelete = cardId => {
    const cards = this.state.cards.filter(card => card.id !== cardId);
    this.setState({cards});
  }

  handleIncrement = cardQuantity => {
    const cards = [...this.state.cards];
    const id = cards.indexOf(cardQuantity);
    cards[id] = {...cardQuantity};
    cards[id].quantity++;
    this.setState({cards});
  }

  render() {
    return (
      <>
        <Navbar/>
        <div className="container">
          <h1 style={{marginTop: "40px"}}>What would you like to order?</h1>
        
          <div className="row">
            {this.state.cards.map( card => (
              <Card 
                key = {card.id}
                card = {card}
                onDelete = {this.handleDelete}
                onIncrement = {this.handleIncrement}
              />
            ))} 
          </div>
        </div>
      </> 
    );
  }
    
  
}

export default App;
