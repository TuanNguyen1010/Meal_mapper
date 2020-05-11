# Meal Mapper

## Description
This is a Full-stack application utilising the MERN tech stack that allows users to plan meals for future meals. The user can select a date on the calendar where they can search and save recipes to cook on the selected date. The user can see all meal plans saved for dates in the future, any recipes saved but the date has passed will be removed. 

## Live application
The application has been deployed on Heroku <http://mealmapper.herokuapp.com/>

## Technologies
  ### Tech Stack
   * MongoDB: a general purpose, document-based, distributed database I used to fetch, save and update the albums information.
Express: a fast, unopinionated, minimalist web framework for Node.js I used to get, post and patch the albums information from / to the MongoDB database and the React single page app.
   * Node: a JavaScript runtime built on Chrome's V8 JavaScript engine I used to write JavaScript code on the server side.
   * React: a JavaScript library I used to build the user interface and gather data from the Express and external APIs.
   * CSS Flexbox: a flexible box layout module I used to design flexible responsive layout structure without using float or positioning.


  ### Testing frameworks:
   * Jest: a JavaScript Testing Framework with a focus on simplicity.
   * Enzyme: a JavaScript Testing utility for React that makes it easier to test the React Components' output.
   * Supertest: a npm package that gives you get the ability to send GET, POST, PUT, PATCH and DELETE requests.


## To install and run the code
* Clone the repo 
* Run $ npm install for Back-end dependecies
* Run $ npm run client-install for Front-end dependecies

## Features
- User can select date on calender to start planning
- User can search for recipes
- User can save the recipe to the selected date
- User can add multiple recipes
- Usere can view all saved recipe with date saved
- User can generate a shopping list from all recipes within selected date

## Running Tests

- Run `$ npm test` for the Express endpoint tests
- Run `$ cd client && npm test` for the React tests

