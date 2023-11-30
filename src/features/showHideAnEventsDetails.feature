Feature: Show/hide Event details
    Scenario: An event element is collapsed by default
        Given the user is looking at an event
        When the user clicks on an event
        Then the user should see the short summary of the event

    Scenario: User can expand an event to see details
        Given the user is reading the short summary of an event
        When the user selects to view more details
        Then the user should see the full event details

    Scenario: User can collapse an event to hide details
        Given the user is reading the expanded full event details
        When the user selects to collapse the more details
        Then the user should see the short summary