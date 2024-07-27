const mongoose = require('mongoose');
const express = require('express');
const app = express();

app.use(express.json());

mongoose.connect('mongodb+srv://admin:1234567890@cluster0.wuf1tht.mongodb.net/aditya', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// const newUser = new User({ name: 'Aditya', email: "raj80179@gmail.com",password: '12345678' });
//Users is the name of the collection used under aditya DB
const User = mongoose.model('Users', { name: String, email: String, password: String });

app.post('/newUser', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).send('Username already exists!');
    }

    const newUser = new User({
      name,
      email,
      password,
    });

    await newUser.save();
    res.status(201).json({
      msg: 'New User successfully created.',
    });
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
