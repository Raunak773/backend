# Experiment 13: Programs using MongoDB database with Node.js

## Aim
To perform CRUD operations on a MongoDB database from Node.js.

## Course Outcome
CO3

## Files
- `app.js`: create, read, update and delete operations
- `package.json`: lists the `mongodb` driver

## How to run
Requires Node.js and a MongoDB server (local install, or a free MongoDB Atlas cluster).

```bash
cd exp13
npm install
node app.js
```

For Atlas or a remote server, set the connection string first:

```bash
MONGO_URI="mongodb+srv://user:pass@cluster.mongodb.net" node app.js
```

Never commit real credentials to GitHub.

## Concepts covered
- Connecting with `MongoClient`
- `insertOne`, `insertMany`
- `find` with filters and `sort`
- `updateOne` with `$set`
- `deleteOne`, `deleteMany`
- Async/await and closing the connection

## Expected output
Console output of all students, the filtered CSE students scoring above 80, then the collection after an update and a delete. The `college` database is created automatically.
