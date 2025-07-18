const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
  title: { type: String,default: 'Untitled' },
  content: { type: String, default: '' },
}, {
  timestamps: true // adds createdAt & updatedAt
});

module.exports = mongoose.model('Note', noteSchema);
