import React from 'react';
import Intro from './intro';
import { shallow } from 'enzyme';

describe('Intro', () => {

  let props;
  beforeEach(() => {
    props = {
      name: 'Intro',
      picture: './img/intro.jpg',
      children: <div data-test="mock-children" />,
      };
  });

  it('Intro renders correctly', () => {
    const component = shallow(<Intro {...props} />);
    expect(component).toBeTruthy();
  });

    it('check the name works correctly', () => {
        const component = shallow(<Intro {...props} />);
        expect(component.find('[data-test="mock-intro"]').contains("A statically generated blog example using"));
    });
    
    // test href and CMS
    
});
