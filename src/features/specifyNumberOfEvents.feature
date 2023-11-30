Feature: Specify Number of Events
    Scenario: When user hasn’t specified a number, 32 events are shown by default
        Given the user is looking at the main page
        When the user clicks on the list of events
        Then the number of events should default at 32

    Scenario: User can change the number of events displayed
        Given the user is looking at the list of events
        When the user types new number of events in the textbox
        Then the list should change to reflect that exact number of events typed