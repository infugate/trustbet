


//for multuser changes 


const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require("axios");
const jwt = require('jsonwebtoken');
const User = require('./models/UserSignUp');
const User_Wallet = require('./models/Wallet');
const betRoutes = require('./Routes/betRoutes');
const ApiRoutes = require('./Routes/ApiRoutes');

// Load environment variables from .env file
require('dotenv').config(); // Using CommonJS style for dotenv

const app = express();
app.use(bodyParser.json());
app.use(express.json());
// app.use(
//   cors({
//     origin: ["https://www.98fastbet.com", "https://admin.98fastbet.com"], // Replace '*' with the specific origin(s) you want to allow, e.g., 'https://yourdomain.com'
//     methods: ['POST', 'GET', 'PUT', 'DELETE'], // Define allowed HTTP methods
//     credentials: true, // Allow credentials like cookies to be sent
//   })
// );
app.use(cors());

// Access environment variables
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGODB_URI;

// Connect to MongoDB
mongoose.connect(MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log('Error connecting to MongoDB: ', err));

const JWT_SECRET = 'bunneybet'



app.get('/api/name/:id', async (req, res) => {
  const { id } = req.params; // Access the 'id' from the URL parameter

  try {
    // Find the user by the provided ID from MongoDB
    const user = await User.findById(id);
    const Wallet = await User_Wallet.findOne({ user: id });
    
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    
    // Respond with the username
    res.json({ username: user.username ,walletBalance: Wallet.balance});
  } catch (error) {
    console.error('Error fetching user:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});


// Routes

// Signup Route

app.post('/api/signup', async (req, res) => {
  const { username, email, password } = req.body;

  // Ensure all fields are provided
  if (!username || !email || !password) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    const savedUser = await newUser.save();

    // Create a wallet for the new user
    const wallet = new User_Wallet({
      user: savedUser._id,
      balance: 15000, // Set an initial wallet balance if desired
    });
    await wallet.save();

    // Link the wallet to the user
    savedUser.wallet = wallet._id;
    await savedUser.save();
    // Respond with success
    res.status(201).json({
      message: 'User registered successfully',
      user: { id: savedUser._id, username: savedUser.username, email: savedUser.email },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});


// Login Route
app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password are required' });
  }

  try {
    const user = await User.findOne({ username }).populate('wallet');
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid password' });
    }

    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '1h' });

    res.status(200).json({
      message: 'Login successful',
      token,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        walletBalance: user.wallet?.balance || 0,
      },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});


      // const API_KEY = "b22f84fa33e4c2355fcfadc5d72558e3";
      // const BASE_URL = "https://api.the-odds-api.com/v4/sports/cricket/odds/";
      
      // app.get("/api/sports-data", async (req, res) => {
      //   try {
      //     const url = `${BASE_URL}?apiKey=${API_KEY}&regions=uk&markets=h2h&oddsFormat=decimal`;
      //     const response = await axios.get(url);
      //     res.json(response.data);
      //   } catch (error) {
      //     console.error("Error fetching data:", error.message);
      //     res.status(500).json({ error: "Failed to fetch sports data" });
      //   }
      // });




      async function fetchLeagues() {
        const url = "https://melbet.org/service-api/LiveFeed/Get1x2_VZip";
        const querystring = {
            sports: "66",
            count: "20",
            lng: "en",
            gr: "62",
            mode: "4",
            country: "71",
            partner: "8",
            getEmpty: "true",
            virtualSports: "true",
            noFilterBlockEvent: "true",
        };
    
        const headers = {
            "Accept": "application/json, text/plain, */*",
            "Accept-Language": "en-US,en;q=0.5",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:134.0) Gecko/20100101 Firefox/134.0",
        };
    
        try {
            const response = await axios.get(url, { headers, params: querystring });
            return response.data.Value;
        } catch (error) {
            console.error('Error fetching leagues:', error.message);
            return [];
        }
    }
    
    // API endpoint to fetch leaguess
    app.get('/api/leagues', async (req, res) => {
        const leaguesData = await fetchLeagues();
        res.json(leaguesData);
    });


      
      app.get('/api/balance', async (req, res) => {
        try {
          let wallet = await User_Wallet.findOne(); // Retrieve wallet document
          if (!wallet) {
            wallet = new User_Wallet({ balance: 15000 }); // Use default balance from schema
            await wallet.save();
          }
      
          
          res.json({ balance: wallet.balance });

        } catch (err) {
          console.error(err);
          res.status(500).json({ message: 'Server error' });
        }
      });
 
      app.use(betRoutes);
      app.use(ApiRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

