require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const notesRouter = require('./routes/notes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/notes', notesRouter);

app.get('/', (req, res) => {
  res.send('API is running...');
});

// ✅ Connect to MongoDB (connect once)
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ Connected to MongoDB'))
.catch(err => console.error('❌ MongoDB connection error:', err));

// ✅ Conditionally start server only if running locally
if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`🚀 Server running locally on http://localhost:${PORT}`);
  });
}

// ✅ Export app for Vercel serverless
module.exports = app;
