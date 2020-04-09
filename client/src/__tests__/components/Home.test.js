import React from 'react';
import { render } from '@testing-library/react';
import Home from '../../components/Home';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import data from '../../mocks/cartMocks'
// import React from 'react';
import { shallow } from 'enzyme';
// import App from './App';


const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)
const store = mockStore(data);
it('renders without crashing', () => {
    shallow(
        <Provider store={store}>
            <Home />
        </Provider>
    );
  });

test('renders and matches snapshot', () => {
  const component  = shallow(
        <Provider store={store}>
          <Home />
        </Provider>
        );
    expect(component).toMatchSnapshot();
});
