const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;

const app = express();
const port = 3000;

app.use(bodyParser.json());

// MongoDB connection URL
const url = 'mongodb://localhost:27017';
const dbName = 'trailDB';

app.use(express.static(__dirname + "/public"));
// Endpoint for registration
app.post('/api/register', (req, res) => {
  const user = req.body;

  MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
    if (err) {
      console.error('Error connecting to MongoDB:', err);
      res.status(500).send('Internal Server Error');
      return;
    }

    const db = client.db(dbName);
    const collection = db.collection('studentPortal'); // Change 'users' to your desired collection name

    collection.insertOne(user, (insertErr, result) => {
      if (insertErr) {
        console.error('Error inserting document:', insertErr);
        res.status(500).send('Internal Server Error');
      } else {
        console.log('Registration successful:', result.ops[0]);
        res.status(200).send('Registration successful');
      }

      client.close();
    });
  });
});

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
