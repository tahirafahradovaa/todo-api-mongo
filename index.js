const express = require("express");
const { default: mongoose } = require("mongoose");
var cors = require("cors");
const todosRouter = require("./routers//todosRouter");
const { todos } = require("./models/Todos");
const app = express();
app.use(express.json());
app.use(express.urlencoded());
require("dotenv").config();
const mongoDbUser = process.env.mongoDbUser;
const mongoDbPassword = process.env.mongoDbPassword;
mongoose
  .connect(
    `mongodb+srv://${mongoDbUser}:${mongoDbPassword}@code-academy.ws58g7e.mongodb.net/todosApi`
  )
  .then((res) => {
    console.log("Connect!");
  })
  .catch((err) => {
    console.log("err", err);
  });
// const newTodo = new todos({
//   text: "Finish weekly report",
//   isCompleted: false,
// });
// newTodo.save();
app.get("/", function (req, res) {
  res.json("Hello");
});

app.use("/api/todos", todosRouter);

app.listen(8080);
