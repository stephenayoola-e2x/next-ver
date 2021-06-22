import React from 'react';
import { shallow } from 'enzyme';
import DateComponent from './date'

describe('DateComponent', () => {

  let props;
  beforeEach(() => {
    props = {
      dateString: "01 Jan 1970 00:00:00 GMT",
      };
  });

   it('Test if DateComponent renders correctly', () => {
    const component = shallow(<DateComponent {...props} />);
      expect(component).toBeTruthy();
  });

   // test if the dateString exist
  it('test if the dateString exist', () => {
    const component = shallow(<DateComponent {...props} />);
      expect(component.find('[data-test="mock-date"]').length).toBe(1);
  });

});
