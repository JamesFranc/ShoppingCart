import React from 'react';
import App from '../App';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import data from '../mocks/cartMocks';
import { shallow } from 'enzyme';


const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)
const store = mockStore(data);

it('renders without crashing', () => {
    shallow(<App />);
});

test('renders and matches snapshot', () => {
  const component  = shallow(
        <Provider store={store}>
          <App />
        </Provider>
        );
    expect(component).toMatchSnapshot();
});
