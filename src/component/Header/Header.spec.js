import * as React from 'react';
import { mount } from 'enzyme';
import Header from './Header';

describe('Should render or not the header', () => {

  const wrapper = mount(<Header />);

  it('Should show branding Logo if path logo exist', () => {
    wrapper.setProps({ branding: 'fake/path' });
    expect(wrapper.find('BrandingLogo')).toHaveLength(1);
  });
});
