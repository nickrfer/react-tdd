import React, { Component } from 'react';
import { Form, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';

class Wish extends Component {
  constructor() {
    super();

    this.state = { person: '', wish: '' };
  }

  render() {
    return (
      <div className='wish'>
        <Form>
          <FormGroup>
            <ControlLabel>Person</ControlLabel>
            <FormControl
              className='input-person'
              onChange={event => this.setState({ person: event.target.value })}
            />
          </FormGroup>
          <FormGroup>
            <ControlLabel>Item</ControlLabel>
            <FormControl
              className='input-item'
              onChange={event => this.setState({ item: event.target.value })}
            />
          </FormGroup>
        </Form>
        <Button
          className='btn-remove'
          onClick={() => this.props.removeWish(this.props.wish.id)}
        >
          Remove Wish
        </Button>
      </div>
    );
  }
}

export default Wish;
