const express = require('express');
const tasks = require('./routes/tasks');
const app = express();
const connectDB = require('./db/connect');
require('dotenv').config();

// middleware
app.use(express.json());

// routes
app.use('/api/v1/tasks', tasks);

app.get('/hello', (req, res) => {
  res.send('Task Manager App');
});

const port = 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, console.log(`Server is listening on port ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();
