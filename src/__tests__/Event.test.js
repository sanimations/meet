import { render } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import Event from "../components/Event";
import { getEvents } from '../api';
import { mockData } from "../mock-data";

describe("<Event /> component", () => {
  let EventComponent;
  let allEvents;

  beforeAll(async ()=> {
    allEvents = await getEvents();//fetch data before the tests
})
beforeEach( async() => {
    EventComponent = render(<Event event={allEvents[0]}/>);
});

  test("renders event title(using summary)", () => {
    expect(
      EventComponent.queryByText(allEvents[0].summary)
    ).toBeInTheDocument();
  });

  test('renders event start time', () => {
    expect(EventComponent.queryByText(allEvents[0].created)).toBeInTheDocument();
  });

  test("renders event location", () => {
    expect(
      EventComponent.queryByText(allEvents[0].location)
    ).toBeInTheDocument();
  });

  test("renders event details button with the title (show details)", () => {
    expect(EventComponent.queryByText("Show Details")).toBeInTheDocument();
  });

  test('by default, event details should be hidden', () => {
    expect(EventComponent.queryByText(allEvents[0].description)).not.toBeInTheDocument();
  });

  test('shows details when user clicks button', async() => {
    const showDetailsButton = EventComponent.queryByText('Show Details');
    await userEvent.click(showDetailsButton);
    expect(EventComponent.queryByText(allEvents[0].description)).toBeInTheDocument();
  });

  test('hides details section when the user clicks button', async() => {
    const hideDetailsButton = EventComponent.queryByText('Hide Details');
    await userEvent.click(hideDetailsButton);
      expect(EventComponent.queryByText(allEvents[0].description)).not.toBeInTheDocument();
  });
});
