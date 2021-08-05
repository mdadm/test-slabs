# Getting Started with Products List App

Before you'll start the App, please install dependencies by running `yarn install` command. Then copy .env-files: `frontend/.env.dist` to `frontend/.env`, `backend/.env.dist` to `backend/.env`, `database.env.dist` to `database.env` and set up correct values of environment variables. You may change url in `frontend/.env` file for getting data through API of external server or keep default value and get data from backend server. You also have to install Docker to run this application. 

## Starting App

* If you've set up your own url to `frontend/.env` run `docker-compose up frontend `. This will start the frontend and can get data from external server.
  

* If you've kept default url and want to get data from backend server, run `docker-compose up frontend backend database`. This will start the frontend app on port 3000 and backend server on port 3001. Data will receive from the PostgreSQL database.

## Open App
Once the app starts, just open [http://localhost:3000](http://localhost:3000) to view it in the browser. 
