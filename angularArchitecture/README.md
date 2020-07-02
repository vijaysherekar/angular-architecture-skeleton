# AngularArchitecture

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


#Few Points about application structure
1. Application has following types of modules
   1. Core
   2. Shared
   3. Feature

2. Core  Module 
   It has following contains
   1. Custom Error Handler
   2. Guards which are feature module wise, it will guard for each feature
   3. Logger This will have helper methods such as log, info and error. According to log level mentioned in environment file for each environment it will print the logs or send the log to server if required
   4. HTTP Interceptors currently we have the auth and logging 
   5. common this has common services such as
      1. user Details
      2. Application Constants
      3. Common API 
      4. Check Access Service will check the respective logged in user has the rights to access the modules or not. We can also check user has read and write only access or not

3. Feature Module 
   All the business requirement which is divided into multiple modules. Each feature module has the following items
      1. Multiple components 
      2. Every components will have service, which will do all the business logic and refered in the corresponding component
      3. Every module will have data service, which will calls the respective api 
      4. Routing will have canActivate guard 

4. Shared
   This module will be referenced into all the feature modules. It has following contains
   1. Angular Material Module
