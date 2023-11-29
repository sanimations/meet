Feature: Filter events by city
 Scenario: When user hasn’t searched for a city, show upcoming events from all cities.
  Given user hasn’t searched for any city
  When the user opens the app
  Then the user should see the list of all upcoming events.

 Scenario: User should see a list of suggestions when they search for a city.
  Given the main page is open
  When user starts typing in the city textbox
  Then the user should recieve a list of cities (suggestions) that match what they’ve typed
  
 Scenario: User can select a city from the suggested list.
  Given user was typing “Berlin” in the city textbox
  And the list of suggested cities is showing
  When the user selects a city (e.g., “Berlin, Germany”) from the list
  Then their city should be changed to that city (i.e., “Berlin, Germany”)
  And the user should receive a list of upcoming events in that city


# Feature: Filter events by city
#   # As a user, I should be able to expand an event, so that I can see the details of that event.
#     Scenario: User can expand an event to see details
#         Given the user is reading the short summary of an event
#         When the user selects to view more details
#         Then the user should see the full event details

# # As a user, I should be able to collapse an event, so that I can stop seeing the details of that event.
#     Scenario: User can collapse an event to hide details
#         Given the user is reading the expanded full event details
#         When the user selects to collapse the more details
#         Then the user should see the short summary

# # As a user, I should be able to change the number of events displayed, so that I can have a smaller list of events appear on my screen.
#     Scenario: User can change the number of events displayed
#         Given the user is reading a list of events
#         When the user selects a number (8, 12, 16, 24)
#         Then the list should collapse/expand to the number of events selected