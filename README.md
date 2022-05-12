# Voll Test Backend

## Context

This project was developed as a coding challenge for a position at Voll Solutions.

The proposal requested a platform, composed of front-end, back-end and database to manage a point-based virtual store.

These are the main technologies used:
* Node.js + express for the API.
* Joi for input validation.
* Jest + supertest for testing.
* Heroku + Heroku Postgres for deploy.

## Installation

### Pre-requisites:

### Setup:
* Clone the repository https://github.com/gcesconeto/voll-test-backend.
* Open a terminal window inside the project folder and run `npm install`

## Using the API
To use the API locally run `npm start` in the root directory, these endpoints will be available at http://localhost:3001/ (default)
It is also hosted at https://voll-test-backend.herokuapp.com

### Endpoints:
  * POST `/user/register`:
    * Receives the name, email and password of the new user.
    * Responds with CREATED status.
  * POST `/user/login`:
    * Receives the email and password of the user.
    * Responds with a token encoding the user's info.
  * GET `/user`:
    * Requires token.
    * Responds with info pertaining to the user making the request.
  * GET `/user/list`:
    * Requires admin token.
    * Responds with a list of all registered users.
  * POST `/user/updateBalance`:
    * Requires admin token.
    * Receives the user id and adjustment value.
    * Responds with updated balance.
  * DELETE `/user/delete`:
    * Requires admin token.
    * Receives the email of the user to be deleted.
    * Responds with deletion of user and OK status.
  * POST `/product/create`:
    * Receives the name, price and description of the new product.
    * Responds with created product.
  * GET `/product/list`:
    * Requires token.
    * Responds with a list of all products in DB.
  * POST `/sale/create`:
    * Requires token.
    * Receives price and a list of products and quantities.
    * Returns the id for the new sale.
  * GET `/sale/list`:
    * Requires token.
    * Responds with a list of all sales pertaining to the user making the request.
  * GET `/sale/:id`:
    * Requires consumer or seller token.
    * Receives the id of the sale in the URL.
    * Responds with specific sale details.

## Tests

Integration tests were created for every endpoint covering the happy & unhappy paths.\
To run them use `npm run test`.

## Next steps

* Refactor for better separation of authentication layers.
* Dockerization.

## Contact

* Guilherme Cesconeto
* [`Github`](https://github.com/gcesconeto)
* [`LinkedIn`](https://www.linkedin.com/in/cesconeto/)
