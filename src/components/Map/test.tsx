import { render, screen } from '@testing-library/react';

import Map from '.';

describe('<Map/>', () => {
  it('should render without any marker', () => {
    render(<Map />);

    expect(screen.getByRole('presentation')).toBeInTheDocument();
  });

  it('should render with the marker in correct place', () => {
    const placeOne = {
      id: '1',
      name: 'Itabuna',
      slug: 'itabuna',
      location: {
        latitude: 0,
        longitude: 0,
      },
    };

    const placeTwo = {
      id: '2',
      name: 'Ilhéus',
      slug: 'ilhéus',
      location: {
        latitude: 110,
        longitude: -53,
      },
    };

    render(<Map places={[placeOne, placeTwo]} />);

    expect(screen.getByTitle(/itabuna/i)).toBeInTheDocument();
    expect(screen.getByTitle(/ilhéus/i)).toBeInTheDocument();
  });
});
