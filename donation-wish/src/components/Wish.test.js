import React from 'react';
import { shallow } from 'enzyme';
import Wish from './Wish';

describe('Wish', () => {
  const mockRemove = jest.fn();
  const id = 1;
  const props = { wish: { id }, removeWish: mockRemove };
  const wish = shallow(<Wish {...props} />);

  it('renders properly', () => {
    expect(wish).toMatchSnapshot();
  });

  it('initializes a person and wish in `state`', () => {
    expect(wish.state()).toEqual({ person: '', wish: '' });
  });

  describe('when typing into the person input', () => {
    const person = 'Uncle';

    beforeEach(() => {
      wish.find('.input-person').simulate('change', { target: { value: person } });
    });

    it('updates the person in `state`', () => {
      expect(wish.state().person).toEqual(person);
    })
  });

  describe('when typing into the present input', () => {
    const item = 'Old 3ds';

    beforeEach(() => {
      wish.find('.input-item').simulate('change', { target: { value: item } });
    });

    it('updates the present in `state`', () => {
      expect(wish.state().item).toEqual(item);
    });
  });

  describe('when click the `Remove Wish` button', () => {
    beforeEach(() => {
      wish.find('.btn-remove').simulate('click');
    });

    it('calls the removeWish callback', () => {
      expect(mockRemove).toHaveBeenCalledWith(id);
    });
  })
});
