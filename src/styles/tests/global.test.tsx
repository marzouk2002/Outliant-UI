import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { ProviderTest } from '../../tests/test-utils';
import { GlobalStyle } from '../global';

const style = {
  padding: 0,
  margin: 0,
  fontFamily: 'Arial,Helvetica,sans-serif',
  backgroundColor: '#FFF',
};

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useRouteMatch: () => true,
  useParams: () => ({ engineId: 123, tenant: 'coherent' }),
}));

describe('Global Style', () => {
  it('should render global style', async () => {
    render(
      <ProviderTest>
        <MemoryRouter initialEntries={['/']}>
          <GlobalStyle />
            <div style={style}>testing</div>
        </MemoryRouter>
      </ProviderTest>
    );

    expect(screen.getByText('testing')).toBeVisible();
  });
});