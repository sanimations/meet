import { loadFeature, defineFeature } from 'jest-cucumber';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
    test('When user hasn’t specified a number, 32 events are shown by default', ({ given, when, then }) => {
        given('the user is looking at the main page', () => {

        });

        when('the user clicks on the list of events', () => {

        });

        then(/^the number of events should default at (\d+)$/, (arg0) => {

        });
    });
    test('User can change the number of events displayed', ({ given, when, then }) => {
        given('the user is looking at the list of events', () => {

        });

        when('the user types new number of events in the textbox', () => {

        });

        then('the list should change to reflect that exact number of events typed', () => {

        });
    });
    
});