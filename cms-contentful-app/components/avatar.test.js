import React from 'react';
import Avatar from './avatar';
import { shallow } from 'enzyme';

describe('Avatar', () => {
  let props;
  beforeEach(() => {
    props = {
      name: 'steve',
      alt: "example image text",
      picture: {
        url: "www.gabriel.com"
      },
    };
  });

  it('renders correctly', () => {
    const component = shallow(<Avatar {...props} />);
    expect(component).toBeTruthy();
    expect(component.find("img").length).toEqual(1);
  });

  it('check the name works correctly', () => {
    const component = shallow(<Avatar {...props} />);
    expect(component.find('[data-test="mock-avatar"]').contains("steve"));
  });
  
});
