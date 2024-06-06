const { Schema, model } = require('mongoose');

const snippetSchema = new Schema({
  snippet: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

// Instance Methods
snippetSchema.methods.findByType = function (type) {
  return this.find({ type });
};

const Snippet = model('Snippet', snippetSchema);

module.exports = Snippet;
