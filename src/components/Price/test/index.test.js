import React from 'react';
import { shallow } from 'enzyme';
import { Price } from '..'

const setup = () => {
  const props = {
    value: 0,
    currency: '$',
  }

  const component = shallow(
    <Price {...props} />
  )

  return {
    props: props,
    component: component,
    span: component.find('span').at(0)
  }
}

describe('Price Component', () => {
  it('Render correctly', () => {
    const { span } = setup();
    expect(span.text()).toEqual("0$");
  })
});