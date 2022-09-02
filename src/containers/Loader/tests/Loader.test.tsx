import { FC } from 'react';
import { render, screen } from '@testing-library/react';
import { ProviderCustomStore } from '../../../tests/test-utils';
import Loader from '../Loader';

const loadingState = {
    app: {
        apiLoading: true,
    }
}

const loadedState = {
    app: {
        apiLoading: false,
    }
}

const Component: FC = () => {
  return (
    <div data-testid='component'>Hello World</div>
  )
}

const WrapperComponent = Loader(Component);

describe('App page', () => {
    it('should render the loader', () => {
      const { getByTestId } = render(
        <ProviderCustomStore preloadedState={loadingState}>
            <WrapperComponent/>
        </ProviderCustomStore>
      );
  
      expect(getByTestId('component')).toBeInTheDocument();
      expect(getByTestId('loader')).toBeInTheDocument();
    });
  
    it('should not render the loader', () => {
      const { getByTestId } = render(
        <ProviderCustomStore preloadedState={loadedState}>
            <WrapperComponent/>
        </ProviderCustomStore>
      );
  
      expect(getByTestId('component')).toBeInTheDocument();
    });
});