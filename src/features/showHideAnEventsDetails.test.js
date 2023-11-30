import { loadFeature, defineFeature } from 'jest-cucumber';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {
    test('An event element is collapsed by default', ({ given, when, then }) => {
        given('the user is looking at an event', () => {

        });

        when('the user clicks on an event', () => {

        });

        then('the user should see the short summary of the event', () => {

        });
    });
    test('User can expand an event to see details', ({ given, when, then }) => {
        given('the user is reading the short summary of an event', () => {

        });

        when('the user selects to view more details', () => {

        });

        then('the user should see the full event details', () => {

        });
    });
    test('User can collapse an event to hide details', ({ given, when, then }) => {
        given('the user is reading the expanded full event details', () => {

        });

        when('the user selects to collapse the more details', () => {

        });

        then('the user should see the short summary', () => {

        });
    });
});