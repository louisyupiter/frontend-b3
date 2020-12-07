const mongoose = require("mongoose");

 const mongooseConnect = () => {
  // connect db mongoose
//   const dburl = `mongodb+srv://belajarangular:belajarangular@cluster0.ful4b.mongodb.net/belajar1?retryWrites=true&w=majority`
  const dburl = `mongodb://localhost/belajarangular`;
  const connectionOptions = {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  };
  mongoose.connect(dburl, connectionOptions);

  const db = mongoose.connection;

  db.on("error", console.error.bind(console, "Connection Error:"));
  db.once("open", () => {
    console.log(`Mongoose Connected!`);
  });
};

module.exports = mongooseConnect;