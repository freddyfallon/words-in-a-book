# Words in a book

This simple application was built to allow a user to do two top-line things:

1. View the word count of all words in a text file.

2. View all words that appear a number of times that are also prime numbers.

## User stories
In order to create this application, I drew up user stories to allow me to understand the key functionality:

```
As a user
I want to be able to input a file for the program to read
So that I can count all of its words

As a user
I want to be able to count all of the words in a book
So that I can understand how many times each word occurs

As a user
I want to ignore case and punctuation
So that I don’t count the same word twice

As a user
I want to display a list of all words and the number of times they occur to the screen
So that I can easily view how many times the word occurs

As a user
I want to be able to see if the number of times a word occurs is a prime number
So that I can display this on my interface
```

## Approach

To solve this, I did the following:

1. **Test-driven development:** I used Jasmine to test-drive the development of this application. Nearly all elements are tested, however I did experience some trouble testing some functions.

2. **Domain-modelling:** I mapped out the key elements of the application into their own domains. In the end, I decided to delegate responsibility for the view, file handling, text processing, and aggregation of words into their own areas of the application.

2. **Refactoring:** I refactored my code along the way, splitting large functions up where possible, while attempting to reduce the need for knowledge between the different objects. This was by no means perfect, as basic functionality took priority.

## How to run

Clone or download this repo.

In order to run this app, you will need to have Node installed. If you don't have it, [download it on their website](https://nodejs.org).

In addition, you will need to make sure you have the right node packages installed. In order to do this, simply `cd` into the project's directory and run:

```
npm install
```

Once you have finished, you can then visit this app by running:

```
node app.js
```

and then navigate to http://localhost:3000/ on your browser.

## A note on the interface

Originally, this app ran in the JavaScript console. I took the decision to quickly build a simple interface in the last few hours of this project. Please excuse the styling, because there isn't any!
