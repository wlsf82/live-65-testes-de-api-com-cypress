# live-65-testes-de-api-com-cypress

Sample project to experiment with [Typeform's API](https://developer.typeform.com/).

## Pre-requirements

It is required to have Node.js and npm installed to run this project.

> I used versions `v16.13.2` and `8.3.2` of Node.js and npm, respectively. I suggest you use the same or later versions.

## Installation

Run `npm install` (or `npm i` for the short version) to install the dev dependencies.

## Tests

> **Note:** Before running the tests, make a copy of the [`cypress.env.example.json`](./cypress.env.example.json) file as `cypress.env.json`, and update the `TYPEFORM_ACCESS_TOKEN`, `username`, `password`, etc. accordingly.
>
> The `cypress.env.json` file is included on [`.gitignore`](./.gitignore) and you're safe that confidential info won't be versioned.

Run `npm test` (or `npm t` for the short version) to run the test in headless mode.

Or, run `npm run cy:open` to open Cypress in interactive mode.

## Support this project

If you want to support this project, leave a ⭐.

___

This project was created with 💚 by [Walmyr](https://walmyr.dev).
