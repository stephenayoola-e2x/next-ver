import React from 'react';
import Footer from './footer';
import { shallow } from 'enzyme';

describe('Footer', () => {

//   let props;
//   beforeEach(() => {
//     props = {
//       title: 'modal title',
//       children: <div data-test="mock-children" />,
//       };
//   });

  it('Footer renders correctly', () => {
    const component = shallow(<Footer />);
    expect(component.find('[className="bg-accent-1 border-t border-accent-2"]').length).toBe(1);
  });
});
