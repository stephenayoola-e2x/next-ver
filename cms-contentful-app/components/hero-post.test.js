import React from 'react';
import HeroPost from './hero-post';
import { shallow } from 'enzyme';

describe('HeroPost', () => {

  let props;
  beforeEach(() => {
    props = {
      title: 'Modal title',
      coverImage: {
          url: './img/coverImage.jpg'
      },
      excerpt: 'text',
      author: "Stephen Ayoola",
      slug: "Steve"
      };
  });

  it('HeroPost renders correctly', () => {
    const component = shallow(<HeroPost {...props} />);
        expect(component).toBeTruthy();
  });

  // test if the coverImage and Link exist
  it('coverImage exist in Hero', () => {
    const component = shallow(<HeroPost {...props} />);
        expect(component.find('[data-test="mock-hero"]').length).toBe(1);
        expect(component.find('[data-test="mock-hero-link"]').length).toBe(1);
        expect(component.find('[data-test="mock-hero-date"]').length).toBe(1);

  });

});
