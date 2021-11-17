import { cleanup, screen } from '@testing-library/react';
import renderWithRedux from './renderWithRedux';
import App from '../App';
import userEvent from '@testing-library/user-event';

describe('testing clicks', () => {
  beforeEach(cleanup);
  test('the page should has a button and a text 0', () => {
    const { queryByText } = renderWithRedux(<App />);
    const buttonAdicionar = queryByText('Clique aqui');

    expect(buttonAdicionar).toBeInTheDocument();
    expect(queryByText('0')).toBeInTheDocument();
  });

  test('a click in a button should increment the value of clicks', () => {
    const { queryByText } = renderWithRedux(<App />, { initialState: { clickReducer: { counter: 5 }}}); //Atribuindo valor inicial ao inicialState

    expect(queryByText('5')).toBeInTheDocument();
    const button = queryByText(/clique aqui/i);
    userEvent.click(button);
    expect(queryByText('6')).toBeInTheDocument();
  });

  test('When initialState has a value = 10, a click on the button have to make the counter be 11', () => {
    const { queryByText } = renderWithRedux(<App />, { initialState: { clickReducer: { counter: 10 }}});

    const button = screen.queryByText(/clique aqui/i);
    expect(button).toBeInTheDocument();
    userEvent.click(button);
    const text = queryByText('11');
    expect(text).toBeInTheDocument();
  });
});