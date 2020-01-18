const mongoose = require("mongoose");

const DB_URL = "mongodb://127.0.0.1:27022/talkingBlog"
// const DB_URL = "mongodb+srv://talkingBlog:talkingBlog@cluster0-klvbg.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(DB_URL);

mongoose.connection.on("connected", function() {
  console.log("mongoose connection open to " + DB_URL);
});
mongoose.connection.on("error", function() {
  console.log("mongoose error ");
});
mongoose.connection.on("disconnected", function() {
  console.log("mongoose disconnected");
  console.log(999)
  
});

module.exports = mongoose;
