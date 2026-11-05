# Project Name
Places of Interest - Travel/Tourism board


## Overview



## Screenshots



## Technologies Used
1. Mongo DB
2. Express.js
3. Node.js

## Getting Started


## User Stories
1. as a user , I should be able to create a posting about a location
2. as a user, I should be able to view all location postings
3. as a user , I should be able to list my postings
4. as a user, I should be able to list the postings based on the associated country
5. as a user , I should be able to update my posting
6. as a user , I should be able to delete my posting
7. as a user, I should be able to put a rating for a post
8. as a user, I should be able to add an image for a post

## Database Design

![ERD diagram](image.png)

## Routes

| Method | Route                        | Description                        |
|--------|------------------------------|------------------------------------|
| GET    | /                            | Homepage                           |
| GET    | /posts/new                   | New post form                      |
| POST   | /posts                       | create post                        |
| GET    | /posts                       | Show all posts                     |
| DELETE | /posts/:postId               | Delete a post                      |
| GET    | /posts/:postId/edit          | Edit post form                     |
| PUT    | /posts/:postId               | Submit post edit                   |
| GET    | /posts/country-list          | Show countries with existing posts |
| GET    | /posts/:postId               | Show post details                  |
| GET    | /posts/by-country/:countryId | Show posts for specefic country    |


## Features



## Future Enhancements



## Credits
1. https://gist.github.com/keeguon/2310008 Used for list of countries
2. https://www.w3schools.com/tags/tag_option.asp used for options tag
3. https://pixabay.com/videos/waterfall-river-view-nature-that-356398/ homepage background video by Engin_Akyurt
