var express = require("express");
var gamaController = require("../controllers/Gama");

var router = express.Router();

router.post("/save",gamaController.save);
router.put("/update/:id",gamaController.update);
router.delete("/delete/:id",gamaController.eliminar);
router.get("/delete/:id",gamaController.listarGamas);


module.exports = router;