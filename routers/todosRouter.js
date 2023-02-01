const express = require("express");
const { todosController } = require("../controller/controller");
const router = express.Router();
router.get("/", todosController.getAll);
router.post("/", todosController.add);
router.delete("/:id", todosController.remove);
router.put("/:id", todosController.update);

module.exports = router;
