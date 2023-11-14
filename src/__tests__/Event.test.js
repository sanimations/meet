import { render } from '@testing-library/react';
import Event from '../components/Event';
import '../mock-data';

describe('<Event /> component', () => {
    let EventComponent;
    let allEvents;
    beforeEach(() => {
        EventComponent = render(<Event />);
      })
    test('renders event location', () => {
        expect(EventComponent.queryByText(allEvents[0].location)).toBeInTheDocument();
      });

    test('renders event details button with the title (show details)', () => {
        expect(EventComponent.queryByText('show details')).toBeInTheDocument();
    });
});