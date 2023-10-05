# Meet App

## Overview

The serverless Meet App will allow you to see events from different cities around the world.

## Scenarios

### Scenario 1: User can expand an event to see details

As a user, I should be able to expand an event, so that I can see the details of that event.

**Given** the user is reading the short summary of an event,
**When** the user selects to view more details,
**Then** the user should see the full event details.

### Scenario 2: User can collapse an event to hide details

As a user, I should be able to collapse an event, so that I can stop seeing the details of that event.

**Given** the user is reading the expanded full event details,
**When** the user selects to collapse the more details,
**Then** the user should see the short summary.

### Scenario 3: User can change the number of events displayed

As a user, I should be able to change the number of events displayed, so that I can have a smaller list of events appear on my screen.

**Given** the user is reading a list of events,
**When** the user selects a number (8, 12, 16, 24),
**Then** the list should collapse/expand to the number of events selected.

## How I Will Use Serverless Functions

 User Authentication and Authorization Checks

 Creating, Updating, and Deleting Events

 Real-Time Updates and Notifications with the Google Calendar

