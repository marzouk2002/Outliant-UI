import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import pathname from '../../constants/pathname';
import { ProviderTest } from '../../tests/test-utils';
import App from '../App';

describe('App page', () => {
  it('should render the home page', () => {
    const { getByTestId } = render(
      <ProviderTest>
        <MemoryRouter initialEntries={[pathname.home]}>
          <App />
        </MemoryRouter>
      </ProviderTest>
    );

    expect(getByTestId('home')).toBeInTheDocument();
  });

  it('should render the error page', () => {
    const { getByTestId } = render(
      <ProviderTest>
        <MemoryRouter initialEntries={['/XXXX']}>
          <App />
        </MemoryRouter>
      </ProviderTest>
    );

    expect(getByTestId('errorPage')).toBeInTheDocument();
  });
});