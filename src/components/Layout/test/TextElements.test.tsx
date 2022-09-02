import { render, screen } from '@testing-library/react';
import { ProviderTest } from '../../../tests/test-utils';
import { StyledTitle, StyledText, StyledBookTitle } from '../TextElements';

describe('student name', () => {
  it('should display student name', () => {
    render(
      <ProviderTest>
        <StyledTitle>fooo</StyledTitle>
      </ProviderTest>
    );
    expect(screen.getByText('fooo')).toBeInTheDocument();
  });
});

describe('styled text', () => {
  it('should display text', () => {
    render(
      <ProviderTest>
        <StyledText>fooo</StyledText>
      </ProviderTest>
    );
    expect(screen.getByText('fooo')).toBeInTheDocument();
  });
});

describe('styled label', () => {
  it('should display label', () => {
    render(
      <ProviderTest>
        <StyledBookTitle>fooo</StyledBookTitle>
      </ProviderTest>
    );
    expect(screen.getByText('fooo')).toBeInTheDocument();
  });
});