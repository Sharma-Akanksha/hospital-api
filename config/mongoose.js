const mongoose = require('mongoose');

module.exports = {
    MongoURI: "mongodb://admin:admin987@cluster0-shard-00-00.r3fs6.mongodb.net:27017,cluster0-shard-00-01.r3fs6.mongodb.net:27017,cluster0-shard-00-02.r3fs6.mongodb.net:27017/auth?authSource=admin&replicaSet=atlas-638q0p-shard-0&readPreference=primary&ssl=true"
}

//connect to DB
mongoose.connect(module.exports.MongoURI, { useNewUrlParser: true ,useUnifiedTopology: true });
const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to db"));

db.once('open', function () {
    console.log("Successfully connected to db");
});