const mongoose = require('mongoose');
const dreamnest = mongoose.connect("mongodb://localhost:27017/Dreamnest");

// Check database connected or not
dreamnest.then(() => {
    console.log("Login success connect to MongoDB");
})
.catch(() => {
    console.log("connect to MongoDB failed");
})

const Logindreamnest = new mongoose.Schema({
    name: {
        type:String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    }
});

// collection part
const dbs = new mongoose.model("users", Logindreamnest);

module.exports = dbs;