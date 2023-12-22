const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

 app.use(express.static(__dirname + "/public"));

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/studentPortalDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Define the Mongoose model for the student data
const Student = mongoose.model('Student', {
  name: String,
  age: Number,
  gender: String,
  dob: Date,
  number: String,
  gmail: String
});

app.use(bodyParser.json());

// Handle POST requests to save student data
app.post('/submit', (req, res) => {
  const studentData = req.body;
  const student = new Student(studentData);

  student.save((err) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error saving data to MongoDB');
    } else {
      res.status(200).send('Data saved successfully');
    }
  });
});

const PORT = 3080;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

// var express = require('express');
// var app = express();

// app.use(express.static(__dirname + "/public"));

// // Connect to MongoDB
// var mongoose = require('mongoose');

// mongoose.connect('mongodb://127.0.0.1:27017/studentPortalDB', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// })
// .then(() => {
//   console.log('Connected to MongoDB');
// })
// .catch((err) => {
//   console.error('Error connecting to MongoDB:', err);
// });

// // Create a Mongoose model for the student data
// var Student = mongoose.model('Student', {
//   name: String,
//   age: Number,
//   gender: String,
//   dob: Date,
//   number: String,
//   gmail: String
// });

// app.use(express.json());

// // Handle POST requests to save student data
// app.post('/submit', function (req, res) {
//   var studentData = req.body;

//   // Validate studentData here if needed

//   var student = new Student(studentData);

//   student.save(function (err) {
//     if (err) {
//       console.error(err);
//       res.status(500).send('Error saving data to MongoDB');
//     } else {
//       res.status(200).send('Data saved successfully');
//     }
//   });
// });

// app.listen(3080, function () {
//   console.log("server started");
// });
