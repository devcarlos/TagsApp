# TagsApp project

TagsApp made with Vue.js+Node.js+MongoDB

## Project structure

We have 2 packages inside the project:
- **client:** VueJS Client application.
- **server:** NodeJS Server API application.

Each of the packages have their own `package.json` file and they define their own dependencies.

```
|- package.json => root workspace
|--- packages
|------ client
|-------- package.json  => VueJS App
|------ server
|-------- package.json => NodeJS APP
```

## How to install and run the project.

1. Clone this repository locally `$ git clone git@github.com:devcarlos/TagsApp.git`

2. Install the dependencies. Inside the root `$ npm i`

3. Install and execute MongoDB by [Following Instructions](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/)

 1. `$ brew tap mongodb/brew`

 2. `$ brew install mongodb-community@4.2`

 3. `$ brew services start mongodb-community@4.2`

4. Start both applications. `$ npm start`

5. HTTP Access endpoints:

  1. Client from http://localhost:3000
  2. Server from http://localhost:8000
  3. Admin from http://localhost:8000/admin
