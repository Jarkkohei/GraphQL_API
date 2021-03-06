# GraphQL_ API

Youtube channel Classsed - GraphQL Server Series (MERNG) course project

---

## Install

```bash
git clone https://github.com/Jarkkohei/GraphQL_API.git
```

```bash
cd GraphQL_API
```

```bash
npm install
```

Add `config.js` -file into the projects root folder and copy the following code into it.

If you're using Git, remember to add the `config.js` -file into `.gitignore` -file.

```javascript
module.exports = {
    MONGODB: '<YOUR_MONGODB_CONNECTIO_STRING_HERE>',
    JWT_SECRET_KEY: '<YOUR_SECRET_KEY_HERE>'
}
```

Replace the `<YOUR-MONGODB-CONNECTION-STRING-HERE>` with our MongdDB Atlas connection string and the `<YOUR_SECRET_KEY_HERE>` with your JWT secret key of your choice.

Remember also to replace the `<password>` in the connection string with your MongoDB Atlas Cluster password and the word `test` with your MongoDB Atlas database name.

## Run the server

Run server with nodemon
```bash
npm start
```

Run server without nodemon
```bash
npm run serve
```

Navigate to [localhost:5000](https://localhost:5000 "GraphQL Playground") to see the GraphQL Playground

---

See the `client/README.md` -file for client-side instructions.