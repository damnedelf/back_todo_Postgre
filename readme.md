<br />
<p align="center">
  <a href="https://github.com/damnedelf/back_todo_Postgre/">
    <img src="assets/img/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">ToDO app</h3>

  <p align="center">
   Typescript Front End for todo+Postgre
    <br />
    
  </p>
</p>

  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <details open="open">
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="https://github.com/damnedelf/back_todo_Postgre/issues">report bug, any questions</a></li>
  </ol>
</details>

## About The Project

**Homework for Intspirit dev_courses. Back end part for todo+Postgre**

#### mail: damnedelf@ya.ru

#### github: damnedelf

### Built With

- Typescript,Express,Node. Includes webpack for bundling.

## Getting Started

To get a local copy up and running follow these simple steps.
Requires Postgre DB running locally

### Prerequisites

This is an example of how to list things you need to use the software and how to install it.

- npm
  ```sh
  npm install npm@7.5.4
  ```

### Installation

1. Clone the repo
   ```sh
     git clone https://github.com/damnedelf/back_todo_Postgre.git
   ```
2. GO to project folder
   ```sh
   cd back_todo_Postgre
   ```
3. Install dependency packages
   ```sh
      npm install
   ```

## Usage

1. Create .env file to conigure ur environment. Use env_template as template, if u want.
2. Type run ./node_modules/.bin/sequelize-cli init to create config/models/migrations
3. Rename config/config.json to config/config.js and update the code(u can use as template configtemplate)
4. Create migration file and put it to the migrations folder(U can use as template migrationstemplate)
5. Type npm run db:create to create DB
6. Type npm run db:migrate to create todos table

#### After creating .env,db,table u can build bundle and run server, 2 modes are available;

1. Webpack bundles code

   ```sh
     npm run build:dev
   ```

   App is bundling in dist folder.
   <br />

2. Run server

```sh
npm run start
```

server is listening localhost:5500 by default. U can change it by modifying .env 'PORT' 'URL'

3. Run server

```sh
npm run nodemon
```

The same as last option but autoReload is enabled

<br />

## Contact

damnedelf@ya.ru - email
