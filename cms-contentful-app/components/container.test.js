import React from 'react';
import Container from './container';
import { shallow } from 'enzyme';

describe('Container', () => {
  let props;
  beforeEach(() => {
    props = {
      children: <div data-test="mock-children" />
      };
  });

  it('Container renders correctly', () => {
    const component = shallow(<Container {...props} />);
    expect(component.find('[data-test="mock-container"]').contains(<div data-test="mock-children"/>));
  });
});
