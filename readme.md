# Project Name
Places of Interest - Travel/Tourism board


## Overview
Have you ever vistied a location or destination and wanted to share information about the place or your experience with others?
With Places of interest you can make a posts about your favorite locations that include an image , details about the address , your thoughts and the country in which that place is located. 


## Screenshots
![image of the create post page](image-1.png)

![image of a post with an image and some text](image-2.png)


## Technologies Used
1. Mongo DB
2. Express.js
3. Node.js
4. jQuery
5. Bootstrap 3

## Getting Started
1. Use 'git clone https://github.com/Mohd-Ali90/places-of-interest.git' to clone the git repository
2. Use 'npm i' to install the required project dependencies
3. With seed.js , you can add the country names to the country database so that the list has 243 available countries.
CAUTION: In line 4 you can enter a Mongo URI so that you can push the country names to the country model in the deployed app link , PLEASE MAKE SURE TO REMOVE THE SEED.JS FILE OR ERASE YOUR URI BEFORE GIT ADD OR GIT COMMIT.
4. With nodemon server.js you can test the web app locallly.

## User Stories
1. As a user , I should be able to create a posting about a location.
2. As a user, I should be able to view all postings.
3. As a user , I should be able to edit my postings.
4. As a user, I should be able to list the postings based on the associated country.
5. As a user , I should be able to update my posting.
6. As a user , I should be able to delete my posting.
7. As a user, I should be able to put a rating for a post.
8. As a user, I should be able to add an image for a post.

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
1. Animations implemented on pages for post details and all posts using lottie-wc.js


## Future Enhancements



## Credits
1. https://gist.github.com/keeguon/2310008 Used for list of countries
2. https://www.w3schools.com
3. https://pixabay.com/videos/waterfall-river-view-nature-that-356398/ homepage background video by Engin_Akyurt
4. https://pixabay.com/photos/autumn-lake-trees-reflection-10545288/ autumn background for sign up by fietzfotos
5. https://pixabay.com/photos/mountains-snow-capped-peak-nature-10412381/ snow mountain background by AyşegülAytören
6. https://finsweet.com/lottieflow/download/chat-17-5 sppech bubble animation from lottieflow used on all-posts.ejs
7. https://finsweet.com/lottieflow/download/chat-17-10 edit animation from lottieflow used in details.ejs
8.  https://finsweet.com/lottieflow/download/chat-17-11 del animation from lottieflow used in details.ejs

