# WEEKEND FEEDBACK SURVEY

## Description
Weekend Challenge

The goal of this project was to create a feedback survey using React-redux to build the webpage.  The App needed contain routing, global reducers to hold responses, then axios POST to send data to database.  An admin page was created, which allows an 'admin' to see all database responses, and gives the ability to flag or delete reviews.  Styling was primarily material-ui.


## Screen Shot

![Project Screen Shot](https://github.com/matthewbouc/weekend-redux-feedback-loop/blob/master/public/images/FeedbackSurvey.gif)

### Prerequisites

- [Node.js](https://nodejs.org/en/)
- [PostgreSQL](https://www.postgresql.org/)
- [Postico](https://eggerapps.at/postico/)

## Installation

1. Create a database named `prime_feedback`,
2. The queries in the `data.sql` file are set up to create all the necessary tables and populate the needed data to allow the application to run correctly. The project is built on [Postgres](https://www.postgresql.org/download/), so you will need to make sure to have that installed. We recommend using Postico to run those queries as that was used to create the queries, 
3. Open up your editor of choice and run an `npm install`
4. Run `npm run server` in your terminal
5. Run `npm run client` in your terminal - will open up a new browser tab.

## Usage

1. Clicking Begin Assessment brings the user to the first survey question.
2. The user has 5 icon options for each question or a comment box.
    - The Next button is disabled until they choose a response or enter text
3. Clicking an icon, changes the shading of the icon, showing it has been selected.
    - After clicking Next the users data is recorded.
4. The user can press Previous to return to the last question.
    - The user's response is still displayed.  They may change their response and continue.
5. At the end of the survey, the user is shown a review page with all their responses.
    - They are given the choice to click previous to change responses or Send to submit the feedback.
6. After clicking Send, the user is presented with a confirmation page, thanking them for their feedback.
    - Clicking Leave New Feedback returns the user to the home page.
7. An Admin page exists at /admin.  The admin can view all previous feedback surveys from the user.  Flag and Delete options are available to the admin.
    - Flagging an option turns the icon red.
    - Deleting a survey will produce a modal, confirming the delete - which will permanently remove the response from the database.



## Built With

- HTML/CSS
- Javascript
- Node
- Express
- Axios
- React
- postgreSQL
- Material UI


## Acknowledgement
Thanks to [Prime Digital Academy](https://www.primeacademy.io))!
