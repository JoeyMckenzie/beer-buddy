import { render } from '@testing-library/react';

import FeaturesBreweries from './features-breweries';

describe('FeaturesBreweries', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FeaturesBreweries />);
    expect(baseElement).toBeTruthy();
  });
});
