import React from 'react';

import { render } from '@testing-library/react';

import Reviews from './Reviews';

import { devLink } from '../fixture/data';

describe('<Reviews />', () => {
  it('renders without crash', () => {
    const { container } = render(<Reviews reviews={devLink.reviews} />);

    devLink.reviews.forEach((review) => {
      expect(container).toHaveTextContent(review.name);
    });
  });
});
