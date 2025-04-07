const express = require('express');
const router = express.Router();
const connectDB = require('./config/db');
const cors = require('cors');
require('dotenv').config();

const authRoutes = require('./routes/auth');
const courseRoutes = require('./routes/Courses');

const app = express();


connectDB();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => res.send('API running'));

app.use('/api/auth', authRoutes);
app.use('/api/courses', courseRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = app;
