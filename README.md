## Architecture

### app.js

We require our modules and configurations to build the server and the app.
Then we attach our features (from other folders) to the `server` and the `app` :
- Api routes in the **__API__** folder.
- Front-End routes in the **__FRONT__** folder.
- Websocket routes in the **__WS__** folder.

## API

Our API is build upon 3 main components :
 * routes
 * controllers (middlewares)
 * models

### routes

Routes are just endpoints, we create them with [Express `Router`](http://expressjs.com/en/guide/routing.html).
Routers can be chained :

```javascript
const router1 = Express.router();
const router2 = Express.router();

router1.use('/router2', router2);
router2.route('/myroute') // here : /router2/myroute
    .get(...)
    .post(...)
    .put(...);
```

### controllers

Controllers are [middlewares](http://expressjs.com/en/guide/writing-middleware.html).

Each route takes one middleware or more as parameter. In each middleware, we call the `next()` function to go to the next middleware :
```javascript
router.route('/something')
    .get(middleware1, middleware2, middleware3, middlewareEnd);
//          \            \            \             \
//           \_ next()    \_ next()    \_ next()     \_ res.send()

```

### models

The models are just javascript objects or functions that communicates with your database. They are the only components that have
the right to interact with your DB.
So, say you have a middleware that gets the current user informations in the database, it will have to call a method from your `user` model that
will return the current user : `userModel.getCurrentUser(token)`.


### Illustration

![](/.img/archiAPI.png)



### Getting started

``` shell

sudo -u postgres psql
sudo apt-get install postgresql
```

``` sql

CREATE USER xxx WITH PASSWORD 'xxx';
CREATE DATABASE xxx;
GRANT ALL PRIVILEGES ON DATABASE xxx to xxx;

CREATE TABLE users(
   firstname VARCHAR,
   lastname VARCHAR,
   email VARCHAR,
   PRIMARY KEY( email )
);
```


### Knex.js

##### Create a migration
```
   knex migrate:make xxx
```
