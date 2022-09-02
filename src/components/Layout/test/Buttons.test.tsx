import { render, screen } from '@testing-library/react';
import { ProviderTest } from '../../../tests/test-utils';
import { PrimaryButton, SecondaryButton } from '../Buttons';

describe('simple button', () => {
  it('should display button', () => {
    render(
      <ProviderTest>
        <PrimaryButton success={true}>fooo</PrimaryButton>
      </ProviderTest>
    );
    expect(screen.getByText('fooo')).toBeInTheDocument();
  });
});

describe('simple button', () => {
  it('should display button', () => {
    render(
      <ProviderTest>
        <SecondaryButton>fooo</SecondaryButton>
      </ProviderTest>
    );
    expect(screen.getByText('fooo')).toBeInTheDocument();
  });
});