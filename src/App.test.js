import App from './App';
import Enzyme, {shallow} from 'enzyme'
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({
  adapter: new EnzymeAdapter()
})

test('No Errors on render', () => {
  const wrapper = shallow(<App/>)
  const appComponent = wrapper.find("[data-test='component-app']")
  expect(appComponent.length).toBe(1)
});

test('Renders a button', () => {
  
});

test('Renders a counter', () => {
  
});

test('counter starts at 0', () => {
  
});

test('Clicking on button increments the count', () => {
  
});