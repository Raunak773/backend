// Simple CMS - Backend Development Lab Examination (Option A: Express + EJS + MongoDB)
const path = require('path');
const express = require('express');
const { MongoClient, ObjectId } = require('mongodb');

const MONGO_URL = 'mongodb://127.0.0.1:27017';
const DB_NAME = 'cms_lab';
const COLLECTION_NAME = 'posts';
const PORT = 3000;

const app = express();
const client = new MongoClient(MONGO_URL);
let postsCollection; // set after the database connection opens

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true })); // reads the HTML form body
app.use(express.static(path.join(__dirname, 'public')));

// Helper available in every EJS template
app.locals.formatDate = (date) =>
  new Date(date).toLocaleString('en-IN', { dateStyle: 'medium', timeStyle: 'short' });

// 1. Display all posts (newest first). The content field is left out on purpose.
async function showPosts(req, res, next) {
  try {
    const posts = await postsCollection
      .find({}, { projection: { content: 0 } })
      .sort({ createdAt: -1 })
      .toArray();
    res.render('posts', { posts });
  } catch (err) { next(err); }
}
app.get(['/', '/posts'], showPosts);

// 2a. Show the create-post form (must be declared before /posts/:id)
app.get('/posts/new', (req, res) => {
  res.render('new-post', { errors: [], values: {} });
});

// 2b. Validate, insert into MongoDB, then redirect to the list
app.post('/posts', async (req, res, next) => {
  const title = String(req.body.title ?? '').trim();
  const content = String(req.body.content ?? '').trim();
  const author = String(req.body.author ?? '').trim();

  const errors = [];
  if (!title) errors.push('Title cannot be empty.');
  if (!content) errors.push('Content cannot be empty.');
  if (!author) errors.push('Author cannot be empty.');

  if (errors.length > 0) {
    return res.status(400).render('new-post', { errors, values: { title, content, author } });
  }

  try {
    // createdAt is set here on the server; the form has no date field
    await postsCollection.insertOne({ title, content, author, createdAt: new Date() });
    res.redirect('/posts');
  } catch (err) { next(err); }
});

// 3. Show one complete post, looked up by its _id
app.get('/posts/:id', async (req, res, next) => {
  const { id } = req.params;
  if (!/^[0-9a-f]{24}$/i.test(id)) return res.status(404).send('Post not found.');
  try {
    const post = await postsCollection.findOne({ _id: new ObjectId(id) });
    if (!post) return res.status(404).send('Post not found.');
    res.render('post', { post });
  } catch (err) { next(err); }
});

// Any unexpected error (for example a database failure)
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send('Something went wrong on the server.');
});

async function start() {
  await client.connect();
  postsCollection = client.db(DB_NAME).collection(COLLECTION_NAME);
  console.log('Connected to MongoDB');
  app.listen(PORT, () => console.log(`Simple CMS running at http://localhost:${PORT}`));
}

start().catch((err) => {
  console.error('Could not connect to MongoDB:', err.message);
  process.exit(1);
});
