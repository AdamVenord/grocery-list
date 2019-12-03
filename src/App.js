import React, { Component } from 'react';
import List from './List';
import GroceryForm from './GroceryForm';

class App extends Component {
  state = { grocerys: [
    { id: 1, name: 'Eggs', complete: true },
    { id: 2, name: 'Bell Peppers', complete: false },
    { id: 3, name: 'Peanut Butter', complete: false },
  ] }

  getUniqId = () => {
   return Math.floor((1 + Math.random()) * 0x10000)
     .toString(16)
     .substring(1);
  }

  addItem = (name) => {
    const { grocerys } = this.state;
    const grocery = { name, id: this.getUniqId() , complete: false }
    this.setState({ grocerys: [grocery, ...grocerys] }); 
  }

  render() {
    const { grocerys } = this.state;

    return (
      <div>
        <GroceryForm addItem={this.addItem} />
        <List name="Grocery List" items={grocerys} groceryClick={this.handleClick} />
      </div>
    );
  };
  handleClick = (id) => {
    const { grocerys } = this.state;
    this.setState({
      grocerys: grocerys.map( grocery => {
        if (grocery.id === id) {
          return {
            ...grocery,
            complete: !grocery.complete
          }
        }
        return grocery
      })
    })
  };
};

export default App;