import React from 'react';
import CoverImage from './cover-image';
import { shallow } from 'enzyme';

describe('CoverImage', () => {

  let props;
  beforeEach(() => {
    props = {
      title: 'John',
      picture: './e2x.jpg',
      url: 'https:example.com',
      href: 'https:example.com/steve',
      slug: 'test',
      children: <div data-test="mock-children"/>,
      alt: "newdata"
      };
  });

  it('CoverImage renders correctly', () => {
    const component = shallow(<CoverImage {...props} />);
    expect(component.find("img").length).toEqual(1);
  });

  // test if the slug exist
  it('test if the slug exist', () => {
    const component = shallow(<CoverImage {...props} />);
      expect(component.find('[data-test="mock-slug"]').length).toBe(1);
  });

  // // test the if the slug does not exist
   it('test if the slug does not exist', () => {
     props.slug= null
    const component = shallow(<CoverImage {...props} />);
      expect(component.find('[data-test="mock-slug"]').length).toBe(0);
  });

});
