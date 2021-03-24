const mongoose = require("mongoose");

mongoose.connect(process.env.MONGOD_URL, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
