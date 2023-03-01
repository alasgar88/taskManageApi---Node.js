const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  name: String,
  compleated: Boolean,
});

module.exports = mongoose.model('Task', TaskSchema);
