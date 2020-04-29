const mongoose = require('mongoose');

const { Schema } = mongoose;

const TagSchema = new Schema(
  {
    name: {
      type: String,
      required: 'name cannot be blank'
    },
    color: { //color HexString based from here https://jonasjacek.github.io/colors/
      type: String,
      required: 'color cannot be blank',
      default: '#000000'
    }
  },
  { collection: 'Tags' }
);

module.exports = mongoose.model('Tag', TagSchema);