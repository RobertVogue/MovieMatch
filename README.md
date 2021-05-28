# MovieMatch

MovieMatch is a fusion between Netflix, Tinder, and Whatapp. When you are in the mood to watch a movie with a friend or group. Instead of endlessly browsing, match a movie and skip the headache. The platform has a "discover movie page" this is the Netflix portion. Each movie is clickable to display the movie's trailer. Each user has a personal "list" of movie they want to watch by swiping movie cards. This really gives the Tinder feel. All the platform has to do is match arrays between users to find which movies "match." If you aren't with your friends, you can use the optional messaging feature to talk real time with your friends.

Netflix Portion - Live & Working

Tinder Portion - Fully Swipable with auto refresh of new cards, List creation in Progress

WhatApp Portion - Platform Stable, Rooms not pairing with users, Messaging currently not sending


#Features
##1. Login Page with preconfigured Demo user Login and Easy Sign Up Link


##2. Netflix Inspired Discover Page


##3. Clickable Movies for Instant Trailers (click movie again to end & hide display)


##4. Tinder Inspired Cards to swipe movies you like and dislike


##5. Tinder-like animation effects on swipe


##6. Whatsapp Inspired Messaging using SocketIO-flask








## Getting started

1. Clone this repository (only this branch)

   ```bash
   git clone https://github.com/appacademy-starters/python-project-starter.git
   ```

2. Install dependencies

      ```bash
      pipenv install --dev -r dev-requirements.txt && pipenv install -r requirements.txt
      ```

3. Create a **.env** file based on the example with proper settings for your
   development environment
4. Setup your PostgreSQL user, password and database and make sure it matches your **.env** file

5. Get into your pipenv, migrate your database, seed your database, and run your flask app

   ```bash
   pipenv shell
   ```

   ```bash
   flask db upgrade
   ```

   ```bash
   flask seed all
   ```

   ```bash
   flask run
   ```

6. To run the React App in development, checkout the [README](./react-app/README.md) inside the `react-app` directory.

