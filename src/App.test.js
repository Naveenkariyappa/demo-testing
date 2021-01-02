import App from './App';
import React from 'react'
import Enzyme, {shallow} from 'enzyme'
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({
  adapter: new EnzymeAdapter()
})

const setup = (props={}) => shallow(<App {...props}/>)
const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test='${val}']`)

test('No Errors on render', () => {
  const wrapper = setup()
  const appComponent = findByTestAttr(wrapper,'component-app')
  expect(appComponent.length).toBe(1)
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

describe('Increment', () => {
  test('Renders a increment button', () => {
    const wrapper = setup()
    const Button = findByTestAttr(wrapper,'component-button-inc')
    expect(Button.length).toBe(1)
  });

  test('Clicking on button increments the count', () => {
    const wrapper = setup()
    
    const Button = findByTestAttr(wrapper,'component-button-inc')
    Button.simulate("click")
    
    const countDisplay = findByTestAttr(wrapper,'component-count').text()
    expect(countDisplay).toBe("1")
  });
});

describe("descrement", () => {
  test('Renders a devrement button', () => {
    const wrapper = setup()
    const Button = findByTestAttr(wrapper,'component-button-dec')
    expect(Button.length).toBe(1)
  });

  test('clicking decrement button decrements counter display when state is greater than 0', () => {
    const wrapper = setup()

    const IncButton = findByTestAttr(wrapper,'component-button-inc')
    IncButton.simulate("click")
    
    const Button = findByTestAttr(wrapper,'component-button-dec')
    Button.simulate("click")
    
    const countDisplay = findByTestAttr(wrapper,'component-count').text()
    expect(countDisplay).toBe("0")
  });
})

describe("Show erroe when count tryes to below Zero", ()=>{
  test("error does not show when not needed", ()=>{
    const wrapper = setup();
    const errorDiv = findByTestAttr(wrapper, 'error-message');
    const errorHasHiddenClass = errorDiv.hasClass('hidden');
    expect(errorHasHiddenClass).toBe(true)
  })
})

describe("counter is 0 and decrement is clicked", ()=>{
  let wrapper
  beforeEach(() => {
    wrapper = setup()
    const Button = findByTestAttr(wrapper,'component-button-dec')
    Button.simulate("click")
  });
  test("Button will still display zero", ()=> {
    const count = findByTestAttr(wrapper,'component-count').text()
    expect(count).toBe("0")
  })

  test("clicking increment clears the error", ()=>{
    const IncButton = findByTestAttr(wrapper,'component-button-inc')
    IncButton.simulate("click")
    const errorDiv = findByTestAttr(wrapper, 'error-message');
    const errorHasHiddenClass = errorDiv.hasClass('hidden');
    expect(errorHasHiddenClass).toBe(true);
  })

})