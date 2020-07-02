# angularDemo
This project will help us to implement the best practices for angular including the following
1. Project Folder Structure
2. Implementing Separation of Concerns by separating feature, shared and core modules etc
3. Angular material as CSS framework library
4. Implementing DOM sanitization through pipes
5. HTTP interceptors
6. Bundle analyzer setting -- which will help us to analyze the bundle composition
7. Console logs on browser enable disable with the help of service also handling and notifying the errors to server
8. Uncaught error/exception handling mechanism
9. Base Component to handle the unsubscription and module access to users
10. Logger based on environment
11. Dynamic import with jsonwebtoken
# Created the angular project with below command
ng new angularArchitecture --strict --style=scss --verbose=true --routing=true --packageManager=npm --viewEncapsulation=ShadowDom
# Add .gitignore file from the below path
https://github.com/github/gitignore/blob/master/Node.gitignore

# UI Components
https://github.com/angular/flex-layout

# Feature Module guards
ng g guard core/guards/dashboard/dashboard  --dry-run

# Building the app
ng build --prod --configuration=staging --aot=true --buildOptimizer=true --deployUrl=http://localhost:4300/assets/ --extractCss=true --optimization=true --statsJson=true


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
