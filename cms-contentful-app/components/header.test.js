import React from 'react';
import Header from './header';
import { shallow } from 'enzyme';

describe('Header', () => {

  it('Header renders correctly', () => {
    const component = shallow(<Header />);
    expect(component).toBeTruthy();
        expect(component.find('[data-test="mock-header-class"]').length).toBe(1);
  });

    it('check if Header contains Link', () => {
        const component = shallow(<Header />);
        expect(component.find('[data-test="mock-header"]').length).toBe(1);
        expect(component.find('[data-test="mock-header"]').contains("Blog"));
    });
    
});
