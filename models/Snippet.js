const { Schema, model } = require('mongoose');

const snippetSchema = new Schema(
  {
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
  },
  {
    statics: {
      findRandomByType: async function (type) {
        const snippets = await this.find({ type });
        return snippets[Math.floor(Math.random() * snippets.length)];
      },
      findRandom: async function () {
        const snippets = await this.find({});
        return snippets[Math.floor(Math.random() * snippets.length)];
      },
    },
  }
);

const Snippet = model('Snippet', snippetSchema);

module.exports = Snippet;
