import React from 'react';
import { shallow } from 'enzyme';
import { Title } from '..';

const setup = (title) => {
  const component = shallow(
    <Title title={title} />
  )

  return {
    component: component,
    title: title,
    h1: component.find('h1'),
  }
}

describe('Title Component', () => {
  it('Render correctly', () => {
    const { h1 } = setup('Hola')
    expect(h1.text()).toMatch(/^Hola/)
  })
});