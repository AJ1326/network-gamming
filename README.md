# About this assignment

## Objective

Create a small browser based game using Angular and the Golang server provided. The game should highlight your skills as a Frontend dev. We are not just looking for clean framework and service code (although essential), but also a flair for frontend implementation and design. We want the app to sing - We are a consumer facing games company so this is essential. A backend Golang server is provided for you to interface with.

# Getting started

## Run Locally

1. Go to project folder and install dependencies:

```bash
npm install
```

2. Launch development server, and open `localhost:4200` in your browser:

```bash
npm start
```

## Run via Docker

Additional service has been added into the backend docker-compose file.
Pre-requisites:
-Install Docker
-Docker compose
Go to the root folder of the backend project and RUN the following command
Once you are in server folder(root) of backend.

```bash
 docker-compose up --build
```

And it will start both the frontend and the backend project.
This will start the project on http://127.0.0.1:4200/ by default.

#Project structure

```
dist/                        compiled version
docs/                        project docs and coding guides
e2e/                         end-to-end tests
src/                         project source code
|- app/                      app components
|  |- @core/                 core module (singleton services and single-use components)
|  |- @shared/               shared module  (common components, directives and pipes)
|  |- app.component.*        app root component (shell)
|  |- app.module.ts          app root module definition
|  |- app-routing.module.ts  app routes
|  +- ...                    additional modules and components
|- assets/                   app assets (images, fonts, sounds...)
|- environments/             values for various build environments
|- theme/                    app global scss variables and theme
|- translations/             translations files
|- index.html                html entry point
|- main.scss                 global style entry point
|- main.ts                   app entry point
|- polyfills.ts              polyfills needed by Angular
+- test.ts                   unit tests entry point
reports/                     test and coverage reports
proxy.conf.js                backend proxy configuration
```

# Main tasks

Task automation is based on [NPM scripts](https://docs.npmjs.com/misc/scripts).

| Tasks                         | Description                                                                     |
| ----------------------------- | ------------------------------------------------------------------------------- |
| npm start                     | Run development server on `http://localhost:4200/`                              |
| npm run build [-- --env=prod] | Lint code and build app for production in `dist/` folder                        |
| npm test                      | Run unit tests via [Karma](https://karma-runner.github.io) in watch mode        |
| npm run lint                  | Lint code                                                                       |
| npm run translations:extract  | Extract strings from code and templates to `src/app/translations/template.json` |
| npm run docs                  | Display project documentation                                                   |

When building the application, you can specify the target environment using the additional flag `--env <name>` (do not
forget to prepend `--` to pass arguments to npm scripts).

The default build environment is `prod`.

## Development server

### Running Locally

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change
any of the source files.
You should not use `ng serve` directly, as it does not use the backend proxy configuration by default.

### Running via Docker compose

Run `docker-compose up --build` inside root folder of backend(server). Navigate to `http://127.0.0.1:4200/`. The app/backend will automatically get executed on the above IP.
any of the source files.

## Shell

Angular App Shell can improve performance by loading minimum portion of an application to users while waiting for the entire application to bootstrap.
This shell inherits on other modules as router outlet and these modules render around it.

## Modules

It consists of 4 modules:
Home module
About module
Documentation module
Game module
Shared module

### Home module

It’s a welcome page for the gamers. And once the user clicks on the let's play button then the user is redirected to the game page.

### Game module

It includes the leaderboard listings and add new player’s functionality.

### About module

It includes about the:
-Problem statement

### Document module

It includes documentation of the project. (README.md)

### Shared module

It includes the components that can be used throughout the project.
-Leaderboard: which displays the players listing that are playing the game.
-ServerError: which displays when websocket is crashed or get closed due to some reason.
-Custom modal component (you can design custom modal)
-Add new player component
-Success model when a player wins the game.
-Spinner for showing http requests.
-Confirm dialog components that work as alert modal.

## Themes

I created a wrapper theme over ng-bootsrap and primeng. So that you can directly use the components as per the color of the project. It’s been added to give consistency throughout the project without wasting much time on CSS.
It consists of:
-Button
-Form
-General
-Topography
-Mobile

## Assets

It includes the images that are used in the project and frontend pdf assignment for easy access.

## Error handling

I have created a wrapper over in the build validator class of reactive forms so that all the errors can be stored and used from one place.
Path:
app->modules->data-validator.ts

### Test cases

I havve added unit test cases for

- Add Player service
- Add Player component
- Basic component based test cases to configure all compinents in a moddule.
  (_ Not Inteegrated with Docker as for the mock http call is made to test the add player service in the game.)
  (_ I have written e2e test cases but was not able to test it out due to configuration difference with other projects.)

## Extra features

I have added features to make it look interesting:
-Added home page
-Server error message in case websocket failed
-The game runs in the background, And User enters into the ongoing match
-Modular modal service
-Wrapper theme
-Data validator for error handling

# Used ngX Starter Kit

Generated using [ngX-Rocket](https://github.com/ngx-rocket/generator-ngx-rocket).

#### Libraries

- [Angular](https://angular.io)
- [Bootstrap 4](https://getbootstrap.com)
- [Font Awesome](http://fontawesome.io)
- [RxJS](http://reactivex.io/rxjs)
- [ng-bootstrap](https://ng-bootstrap.github.io)
- [ngx-translate](https://github.com/ngx-translate/core)
- [Lodash](https://lodash.com)

#### Coding guides

- [Angular](docs/coding-guides/angular.md)
- [TypeScript](docs/coding-guides/typescript.md)
- [Sass](docs/coding-guides/sass.md)
- [HTML](docs/coding-guides/html.md)
- [Unit tests](docs/coding-guides/unit-tests.md)
- [End-to-end tests](docs/coding-guides/e2e-tests.md)

#### Other documentation

- [I18n guide](docs/i18n.md)
- [Working behind a corporate proxy](docs/corporate-proxy.md)
- [Updating dependencies and tools](docs/updating.md)
- [Using a backend proxy for development](docs/backend-proxy.md)
- [Browser routing](docs/routing.md)
