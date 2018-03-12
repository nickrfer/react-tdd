import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import Wish from './Wish';
import { max_number } from '../helper';

class App extends Component {
  constructor() {
    super();

    this.state = { wishes: [] };
  }

  addWish = () => {
    const { wishes } = this.state;

    const ids = this.state.wishes.map(wish => wish.id);

    wishes.push({ id: max_number(ids)+1 });

    this.setState({ wishes });
  }

  removeWish = id => {
    const wishes = this.state.wishes.filter(wish => wish.id !== id);

    this.setState({ wishes });
  }

  render() {
    return (
      <div>
        <h2>Donation Wishlist</h2>
        <div className='wish-list'>
          {
            this.state.wishes.map(wish => {
              return (
                <Wish
                  key={wish.id}
                  wish={wish}
                  removeWish={this.removeWish} />
              )
            })
          }
        </div>
        <Button className='btn-add' onClick={this.addWish}>Add Wish</Button>
      </div>
    )
  }
}

export default App;
