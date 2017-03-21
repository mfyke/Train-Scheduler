# HW - Train-Scheduler

## Live Link 
 - https://mfyke.github.io/Train-Scheduler/

## Requirements

-Make sure that your app suits this basic spec:

-When adding trains, administrators should be able to submit the following:

-Train Name

-Destination

-First Train Time -- in military time

-Frequency -- in minutes

-Code this app to calculate when the next train will arrive; this should be relative to the current time.

-Users from many different machines must be able to view same train times.

-Styling and theme are completely up to you. Get Creative!

## Technologies Used
- Jquery

- Javascript

- Html

- CSS

- Moment.js

## Code Explaination

- takes user input and creates a child at in the firebase database

- this information is then pulled from the database and displayed in the Current Train Schedule table.

- moment.js is used to aid in the calculation of the next arrival and minutes away columns