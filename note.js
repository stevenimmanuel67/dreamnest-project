const mongoose = require('mongoose');
const dreamnestNote = mongoose.connect("mongodb://localhost:27017/Dreamnest");

dreamnestNote.then(() => {
    console.log("note Success connect to MongoDB");
})
.catch(() => {
    console.log("connect to MongoDB failed");
})

const noteSchema = new mongoose.Schema({
  judul : {
    type : String,
    required : true
  },
  isi : {
    type : String,
    required : true
  } 
},
  {
    timestamps: true
});

const note = mongoose.model('Note', noteSchema);

module.exports = note;