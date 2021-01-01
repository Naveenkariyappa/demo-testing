import App from './App';
import React from 'react'
import Enzyme, {shallow} from 'enzyme'
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({
  adapter: new EnzymeAdapter()
})

const setup = () => shallow(<App/>)
const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test='${val}']`)
test('No Errors on render', () => {
  const wrapper = setup()
  const appComponent = findByTestAttr(wrapper,'component-app')
  expect(appComponent.length).toBe(1)
});

test('Renders a button', () => {
  const wrapper = setup()
  const Button = findByTestAttr(wrapper,'component-button')
  expect(Button.length).toBe(1)
});

test('Renders a counter', () => {
  const wrapper = setup()
  const counter = findByTestAttr(wrapper,'component-counter')
  expect(counter.length).toBe(1)
});

test('counter starts at 0', () => {
  const wrapper = setup()
  const countDisplay = findByTestAttr(wrapper,'component-count').text()
  expect(countDisplay).toBe("0")
});

test('Clicking on button increments the count', () => {
  const wrapper = setup()
  const Button = findByTestAttr(wrapper,'component-button')
  Button.simulate("click")
  const countDisplay = findByTestAttr(wrapper,'component-count').text()
  expect(countDisplay).toBe("1")
});