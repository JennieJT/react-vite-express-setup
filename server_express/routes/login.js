const express = require('express');
const router = express.Router();

// ... other middleware

const setup_username = 'jingtianwang6@gmail.com';
const setup_password = '123';

// Define login route handler
router.post('/', async (req, res) => {
  const { username, password } = req.body; // Access request body

  // Simulate login logic (replace with your authentication logic)
  let success = false;
  let data = {
    message: "",
    user: {},
    status: ""
    //no login: 1000
  }

  // ... (Perform authentication logic based on username and password)
  if (username === setup_username && password === setup_password) {
    success = true;
    message = "Login Successful"
    data = {
      message: "I'm message within data",
      user: {
        username: username,
      },
      status: '200'
    }
  } else {
    message = 'Invalid username or password';
    user = {}
  }

  res.json(data); // Send response object
});

// No need to export the router here (it's already defined globally)
module.exports = router;