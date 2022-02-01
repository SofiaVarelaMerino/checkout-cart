import React from 'react'
import { shallow } from 'enzyme'
import { ProductList } from '..'

const setup = () => {
  const props = {
    title: 'Shopping Cart',
    children: <div><h2>Hola</h2></div>
  }

  const component = shallow(
    <ProductList {...props} />
  )

  return {
    props: props,
    component: component,
    ulTitle: component.find('ul').at(0),
    children: component.children().at(1)
  }
}

describe('ProductsList Component', () => {
  it('Render correctly', () => {
    const { ulTitle } = setup();
    expect(ulTitle.text()).toMatch(/^Shopping Cart/)
  })
  it('Should render children', () => {
    const { children } = setup()
    expect(children.text()).toMatch(/^Hola/)
  })
});