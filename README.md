# Angular Architecture Skeleton
Develop production ready Angular application. This is a small attempt to help and contribute to the angular community. The guidelines suggested below are purely from my experience, you can implement your own as well.
- [Project Details](#project-details) - Explain internals of application

This app works on all morden browsers. 
If something doesn't work, please [file an issue](https://github.com/vijaysherekar/angular-architecture-skeleton/issues/new)

## Dependencies
- [Node](https://nodejs.org/en/download/) - Version used to build this application is [12.14.0]
- [NPM](https://nodejs.org/en/download/) - In build in node installer, Version 6.13.4
- [Angular-Cli](https://cli.angular.io/) - Version 10.0.0

## Quick Overview
Either download or git clone the repository. 

```sh
git clone git@github.com:vijaysherekar/angular-architecture-skeleton.git
cd angular-architecture-skeleton
npm install
npm start
```
Then open [http://localhost:4200](http://localhost:4200) to see your app. When you are ready deploy to production, create a minified bundle with `npm run build-production`

### Get Started Immediately

You **don’t** need to install or configure tools like webpack or TS compiler.<br>
They are preconfigured and hidden so that you can focus on the code.

clone a project, and you’re good to go.

## Project Details
Purpose of this project is to provide a template or reference to angular developers so that they can extend it as per their requirements.<br/>
Following practices has been implemented
- Folder Structure
- Component Inheritance
- Error Handling
- Logging
- Separation of Concerns
- HTTP Interceptors
- Dynamic Import

The component library and css framework used is
- [Angular Material](https://material.angular.io/) 
  
### What's Included?
Above mentioned practices explain in details
#### Folder Structure
  - The application is separated into three modules
    - Core
    - Feature
    - Shared

These three modules provides the separation of concerns the application 
##### Core
Core module provides the pre-requisites to run the application. It imported only in the app module and it contains following 
   1. Custom Error Handler
   2. Guards which are feature module wise, it will guard for each feature
   3. Logger This will have helper methods such as log, info and error. According to log level mentioned in environment file for each environment it will print the logs or send the log to server if required
   4. HTTP Interceptors currently we have the auth and logging 
   5. common this has common services such as
      1. user Details
      2. Application Constants
      3. Common API 
      4. Check Access Service will check the respective logged in user has the rights to access the modules or not. It also helps to check user has read and write access for the accessible module
##### Feature 
The business requirements are divided into multiple modules. Each feature module has the following
1. Multiple components 
2. Every component will have service, which will do all the business logic and refered in the corresponding component
3. Every module will have data service, which will calls the respective api (Specifically for falcor api to create request object)
4. Routing will have canActivate guard 

##### Shared
This module will be referenced into all the feature modules. It has following items
   1. Angular Material Module

#### Component Inheritance
Component Inheritance will help to achieve below objectives
- Inject services which are common for all components
- As mentioned above this application will help to achieve both module level and operation level access to user for the respective module as per the configuration
- Unsubscribing and nullfying the properties and variables of component
#### Error Handling
Error handling will help to log the errors effectively and if require application can report those to server
#### Logging
According to log level mentioned in the environment file for various environment such as environment.stagging.ts. Application will print the logs on browser or report it to server if needed
#### Separation of Concerns
Explain this point in Folder Structure
#### HTTP Interceptors
Currently we have added auth and ensure http interceptors, we can also add new interceptor which will send sanitized data to server
#### Dynamic Import
This feature will help to prevent the dependancies directly inject into module chunks. In our application we have used it at two places
1. Lazy loading of modules
2. Importing of JSONWEBTOKEN module
## References
- [Dan Wahlin](https://github.com/DanWahlin) Pluralsight angular architecture course
- [Angular.io](https://angular.io/guide/http) HTTP Interceptors

## Acknowledgements
- [Navin Narshetty](https://github.com/navinnarshetty)
- [Pratibha Kunjir](https://github.com/kpratibha209)
- [Puja Shahu](https://github.com/pshahu26)
