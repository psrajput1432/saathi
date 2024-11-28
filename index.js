const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

// Create an Express app
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({extended:true}));


// Connect to MongoDB by jayant
main()
  .then(() => {
    console.log("connection succesful");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/mydatabase");
}

// Define a schema and model for users
const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const User = mongoose.model("User", userSchema);

// Serve static files (including HTML, CSS, and JS)
app.use(express.static(path.join(__dirname)));

// Route for login page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "login.html"));
});

//hendling signup request by jayant
app.post("/signup",(req,res)=>{
  const {username,email,password} = req.body;
  const user1 = new User ({username,email,password});
  user1.save();
  res.redirect("/");
});

// Login endpoint
app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  console.log(req.body);
  try {
    const user = await User.findOne({ email });
    if (user) {
      res.send(" succesful login");
    } else {
      res.status(401).send("Invalid email or password");
    }
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