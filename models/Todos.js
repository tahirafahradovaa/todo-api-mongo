const { default: mongoose, now } = require("mongoose");
const { Schema } = mongoose;

const todosSchema = new Schema({
  text: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
  isDeleted: { type: Boolean, default: false },
  isCompleted: { type: Boolean, default: false },
});

const todos = mongoose.model("Todos", todosSchema);

module.exports = {
  todos,
};
