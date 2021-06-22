import React from 'react';
import Alert from './alert';
import { shallow } from 'enzyme';

describe('Alert', () => {
  let props;
  beforeEach(() => {
    props = {
      preview: true,
      };
  });

  // testing if the component reders correctly
  it('renders correctly', () => {
    const component = shallow(<Alert {...props} />);
    expect(component.find('[data-test="mock-cont"]').length).toBe(1);
  });

  it("check if preveiw is true" , () => {
    const component = shallow(<Alert {...props} />);
      expect(component.find('[data-test="mock-preview"]').length).toBe(1);
      expect(component.find('[data-test="mock-preview-false"]').length).toBe(0);
    })

   it("check if preveiw is false" , () => {
    props.preview = false
    const component = shallow(<Alert {...props} />);
      expect(component.find('[data-test="mock-preview-false"]').length).toBe(1);
      expect(component.find('[data-test="mock-preview"]').length).toBe(0);
    })

  });
 
  