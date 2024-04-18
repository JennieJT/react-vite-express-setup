const express = require('express');
const router = express.Router();

// ... other middleware

const username = 'jingtianwang6@gmail.com';
const password = 'Wjt042509@';

// Define login route handler
router.post('/', async (req, res) => {
  const { s_username, s_password } = req.body; // Access request body

  // Simulate login logic (replace with your authentication logic)
  let success = false;
  let user = null;
  let message = '';

  // ... (Perform authentication logic based on username and password)
  if (username === s_username && password === s_password) {
    success = true;
    user = { haha: "yayyy" };
  } else {
    message = 'Invalid username or password';
  }

  res.json({ success, user, message }); // Send response object
});

// No need to export the router here (it's already defined globally)
module.exports = router;