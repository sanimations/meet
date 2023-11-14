import { render, within } from '@testing-library/react';
import { getEvents } from '../api';
import NumberOfEvents from '../components/NumberOfEvents';
import { userEvent } from '@testing-library/user-event';
import App from '../App';


describe('<NumberOfEvents /> component', () => {
    let NumberOfEventsComponent;
    beforeEach(() => {
        NumberOfEventsComponent = render(<NumberOfEvents />)
    });

    test('contains an element with the role of textbox', () => {
        const numberOfEvents = NumberOfEventsComponent.queryByRole('textbox');
      expect(numberOfEvents).toBeInTheDocument();
    });

    test('default value of input field is 32', () => {
        const defaultValue = NumberOfEventsComponent.queryByRole('textbox');
            expect(Number(defaultValue.value)).toBe(32);
    });

    test('Change the number of events based on what user types', async() => {
        const user = userEvent.setup();
        NumberOfEventsComponent.rerender(<NumberOfEvents setCurrentNOE={() => {}}/>)
        const numberTextBox = NumberOfEventsComponent.queryByRole('textbox');
        await user.type(numberTextBox,'{backspace}{backspace}32');
    })

});