const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = 3080;

app.use(express.static(__dirname + "/public"));

mongoose.set('strictQuery', false);

mongoose.connect('mongodb://localhost:27017/studentPortalDB', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});



const studentSchema = new mongoose.Schema({
  name: String,
  age: Number,
  gender: String,
  dob: Date,
  number: String,
  email: String,
});


const Student = mongoose.model('Student', studentSchema);



app.use(bodyParser.json());


//Add new student

app.post('/api/students', (req, res) => {
    const newStudent = new Student(req.body);
    newStudent.save((err, savedStudent) => {
        if (err) return res.status(500).send(err);
        res.status(201).json(savedStudent);
    });
});

// Get all students
app.get('/api/students', (req, res) => {
    Student.find({}, (err, students) => {
        if (err) return res.status(500).send(err);
        res.json(students);
    });
});

// Update a student by ID
app.put('/api/students/:id', (req, res) => {
    const studentId = req.params.id;
    Student.findByIdAndUpdate(studentId, req.body, { new: true }, (err, updatedStudent) => {
        if (err) return res.status(500).send(err);
        res.json(updatedStudent);
    });
});

// Delete a student by ID
app.delete('/api/students/:id', (req, res) => {
    const studentId = req.params.id;
    Student.findByIdAndRemove(studentId, (err, removedStudent) => {
        if (err) return res.status(500).send(err);
        res.json(removedStudent);
    });
});

  app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
















// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');

// const app = express();
// const port = 3080;

// app.use(express.static(__dirname + "/public"));

// mongoose.set('strictQuery', false);

// mongoose.connect('mongodb://localhost:27017/studentPortalDB', { useNewUrlParser: true, useUnifiedTopology: true });
// const db = mongoose.connection;

// db.on('error', console.error.bind(console, 'MongoDB connection error:'));
// db.once('open', () => {
//   console.log('Connected to MongoDB');
// });



// const studentSchema = new mongoose.Schema({
//   id: Number,
//   name: String,
//   age: Number,
//   gender: String,
//   dob: Date,
//   number: String,
//   email: String,
// });


// const Student = mongoose.model('Student', studentSchema);

// module.exports = Student;

// app.use(bodyParser.json());

// app.post('/submit', (req, res) => {
//   console.log("Received POST request:", req.body);

//   const studentData = req.body;
//   const newStudent = new Student(studentData);

//   newStudent.save((err) => {
//     if (err) {
//       console.error('Error saving student:', err);
//       res.status(500).send('Error saving student');
//     } else {
//       console.log('Student saved successfully');
//       res.status(200).send('Student saved successfully');
//     }
//   });

//   });


// //      //delete



// // Update
// // app.put('/update/:id', (req, res) => {
// //     const studentId = req.params.id;
// //     const updatedStudentData = req.body;

// //     Student.findByIdAndUpdate(studentId, updatedStudentData, { new: true }, (err, updatedStudent) => {
// //         if (err) {
// //             console.error('Error updating student:', err);
// //             res.status(500).send('Error updating student');
// //         } else {
// //             console.log('Student updated successfully');
// //             res.status(200).json(updatedStudent);
// //         }
// //     });
// // });

// app.put('/update/:id', (req, res) => {
//     const studentId = req.params.id;
//     const updatedStudentData = req.body;

//     // Check if _id is provided in updatedStudentData
//     if (!updatedStudentData._id) {
//         return res.status(400).send('Student ID (_id) is required for update');
//     }

//     Student.findByIdAndUpdate(studentId, updatedStudentData, { new: true }, (err, updatedStudent) => {
//         // ... rest of the code
//         if (err) {
//             console.error('Error updating student:', err);
//             res.status(500).send('Error updating student');
//         } else {
//             console.log('Student updated successfully');
//             res.status(200).json(updatedStudent);
//         }
//     });
// });


// // Delete
// app.delete('/delete/:id', (req, res) => {
//     const studentId = req.params.id;

//     Student.findByIdAndRemove(studentId, (err, deletedStudent) => {
//         if (err) {
//             console.error('Error deleting student:', err);
//             res.status(500).send('Error deleting student');
//         } else {
//             console.log('Student deleted successfully');
//             res.status(200).json(deletedStudent);
//         }
//     });
// });



//   app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });
