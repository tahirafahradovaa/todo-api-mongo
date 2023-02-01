const { todos } = require("../models/Todos");

const todosController = {
  getAll: (req, res) => {
    todos.find({ isDeleted: false }, (err, docs) => {
      if (!err) {
        res.json(docs);
      } else {
        res.status(500).json(err);
      }
    });
  },
  add: (req, res) => {
    let newTodo = new todos({
      text: req.body.text,
      isComplated: false,
      isDeleted: false,
    });
    newTodo.save(function (err, doc) {
      if (!err) {
        res.json(doc);
      } else {
        res.status(500).json(err);
      }
    });
  },
  remove: (req, res) => {
    let id = req.params.id;
    todos.findByIdAndUpdate(
      id,
      { isDeleted: true },
      { new: true },
      (err, doc) => {
        if (!err) {
          res.send(doc);
        } else {
          res.status(500).json(err);
        }
      }
    );
  },
  update: (req, res) => {
    let id = req.params.id;
    let body = req.body;
    todos.findByIdAndUpdate(id, body, { new: true }, (err, doc) => {
      if (!err) {
        res.send(doc);
      } else {
        res.status(500).json(err);
      }
    });
  },
};
module.exports = {
  todosController,
};
