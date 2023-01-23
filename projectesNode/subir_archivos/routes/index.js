var express = require("express");
var router = express.Router();
var multer = require("multer");

const storage = multer.diskStorage( 
  {
  destination: function(req, file, cb) {
    cb(null,'./public/images')
  }, 
  filename: function(req, file, cb){
    cb(null, file.originalname);
  },
  }
)

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/subirfoto", function (req, res, next) {
  res.render("subirfoto");
});

module.exports = router;
