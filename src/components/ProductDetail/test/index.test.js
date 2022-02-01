import React from 'react';
import { shallow } from 'enzyme';
import { ProductDetail } from '..'

const setup = () => {
  const props = {
    codeId: 'X2G2OPZ',
    name: 'Cabify Coffee Mug',
    code: 'MUG'
  }

  const component = shallow(
    <ProductDetail {...props} />
  )

  return {
    props: props,
    component: component,
    h1: component.find('h1'),
    p: component.find('p')
  }
}

describe('ProductDetail Component', () => {
  it('Render correctly', () => {
    const { h1, p } = setup();
    expect(h1.text()).toMatch(/^Cabify Coffee Mug/)
    expect(p.text()).toMatch(/^Product code X2G2OPZ/)
  })
});