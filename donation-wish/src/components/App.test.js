import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  const app = shallow(<App />);

  it('renders correctly', () => {
    expect(app).toMatchSnapshot();
  });

  it('initializes the `state` with an empty list of donation wishes', () => {
    expect(app.state().wishes).toEqual([]);
  });

  describe('when clicking the `add-wish` button', () => {
    const id = 1;

    beforeEach(() => {
      app.find('.btn-add').simulate('click');
    });

    afterEach(() => {
      app.setState({ wishes: [] });
    });

    it('adds a new donation wish to `state`', () => {
      expect(app.state().wishes).toEqual([{ id }]);
    });

    it('adds a new wish to the rendered list', () => {
      expect(app.find('.wish-list').children().length).toEqual(1);
    });

    it('creates a Wish component', () => {
      expect(app.find('Wish').exists()).toBe(true);
    });

    describe('and the user wants to remove the added gift', () => {
      beforeEach(() => {
        app.instance().removeWish(id);
      });

      it('removes the wish from `state`', () => {
        expect(app.state().wishes).toEqual([]);
      });
    });
  });
});
