import React from 'react';
import { shallow } from 'enzyme';
import { Count } from '..';

const setup = () => {
  const props = {
    value: 0,
    onClickLess: jest.fn(),
    onClickMore: jest.fn()
  }

  const component = shallow(
    <Count {...props} />
  )

  return {
    props: props,
    component: component,
    input: component.find('input'),
    buttonLess: component.find('button').at(0),
    buttonMore: component.find('button').at(1)
  }
}

describe('Count Component', () => {
  it('Call onClickLess on buttonLess click', () => {
    const { buttonLess, props } = setup()
    buttonLess.simulate('click')
    expect(props.onClickLess).toBeCalled()
  })
  it('Call onClickMore on buttonMore click', () => {
    const { buttonMore, props } = setup()
    buttonMore.simulate('click')
    expect(props.onClickMore).toBeCalled()
  })
});