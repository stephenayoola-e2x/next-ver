import React from 'react';
import Layout from './layout';
import { shallow } from 'enzyme';

describe('Layout', () => {

  let props;
  beforeEach(() => {
    props = {
      title: 'modal title',
      children: <div data-test="mock-children" />,
      };
  });

  it('Layout renders correctly', () => {
    const component = shallow(<Layout {...props} />);
    expect(component.find('[className="min-h-screen"]').length).toBe(1);
  });
});
