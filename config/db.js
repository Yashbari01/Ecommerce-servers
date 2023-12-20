const mongoose = require("mongoose");
try {
  mongoose.connect("mongodb+srv://24yashbari:Yash2002@cluster0.36poxc8.mongodb.net/React_ecommerce?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });
  console.log("Database Connected Successfully");
} catch (err) {
  console.log("Database Not Connected");
}
