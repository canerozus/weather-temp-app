# Weather Temperature App

This is a simple Node.js web service that returns the current temperature of a given city. The service supports both GET and POST requests to fetch the temperature data.

## Features

- Fetch temperature by city name using GET or POST requests
- Local JSON database for storing temperature data

## Prerequisites

- Node.js (v12.x or higher)
- npm (v6.x or higher)

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/canerozus/weather-temp-app.git
    ```

2. Change to the project directory:
    ```bash
    cd weather-temp-app
    ```
3. Install the dependencies:
    ```bash
    cd backend
    npm install
    ```

## Running the Application Locally

1. Start the server:
   ```bash
    cd backend
    npm start
    ```
    This will start the server on `http://localhost:3000`.

## API Endpoints

### GET /temperature

Fetch the temperature of a city using a GET request.

**Request:**
   ```bash
curl -X GET 'http://localhost:3000/temperature?q=city_name'
    ```
### POST /temperature

Fetch the temperature of a city using a POST request.

**Request:**
   ```bash
curl -X POST -H "Content-Type: application/json" -d '{"query": "city_name"}' http://localhost:3000/temperature
    ```
