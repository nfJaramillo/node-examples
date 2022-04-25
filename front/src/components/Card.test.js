import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import { Card } from './Card';

describe('Card <Card/>', () => {
  test('should have an information title', () => {
    const productMock = {
      id: 'MLA',
      title: 'iphone',
      description: 'This is an iphone',
      price: '1000',
      currency_id: '$',
    };
    const divElement = document.createElement('div');

    ReactDOM.render(
      <MemoryRouter>
        <Card
          id={productMock.id}
          title={productMock.title}
          description={productMock.description}
          price={productMock.price}
          currency_id={productMock.currency_id}
        ></Card>
      </MemoryRouter>,
      divElement
    );
    expect(divElement.querySelector('.card-title').textContent).toEqual(
      'iphone'
    );
    expect(divElement.querySelector('.card-text').textContent).toEqual(
      'This is an iphone'
    );
  });
});
