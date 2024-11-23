const express = require("express");
const path = require("path");
const mongoose = require("mongoose");

// Create an Express app
const app = express();

// Connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017/saathi", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

// Define a schema and model for users
const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const User = mongoose.model("User", userSchema);

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Serve static files (including HTML, CSS, and JS)
app.use(express.static(path.join(__dirname)));

// Route for login page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "login.html"));
});

// Route for signup page
app.get("/signup", (req, res) => {
  res.sendFile(path.join(__dirname, "signup.html"));
});

// Login endpoint
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email, password });
    if (user) {
      res.status(200).send(`Welcome ${user.username}! Login successful.`);
    } else {
      res.status(401).send("Invalid email or password");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
});

// Signup endpoint
app.post("/signup", async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Check if the email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).send("Email already exists");
    }

    // Create a new user
    const newUser = new User({ username, email, password });
    await newUser.save();

    res.status(201).send("Signup successful");
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
});

// Start the server
const PORT = 5501;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
 