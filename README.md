# angularDemo
This project will help us to implement the best practices for angular including the following
1. Project Folder Structure
2. Implementing Separation of Concerns by separating feature, shared and core modules etc
3. Angular material as CSS framework library
4. Implementing DOM sanitization through pipes
5. HTML interceptors
6. Bundle analyzer setting -- which will help us to analyze the bundle composition
7. Console logs on browser enable disable with the help of service also handling and notifying the errors to server
8. Uncaught error/exception handling mechanism
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