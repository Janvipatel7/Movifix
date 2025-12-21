const express = require("express");
const {  allMovie, getMovieForm, addMovie, editMovie, updateMovie, deleteMovie, description } = require("../controller/adminController.js");
const upload = require("../middleware/multer.js");
const router = express.Router();

router.get('/', allMovie)
router.get('/add-movie' , getMovieForm)
router.post('/add-movie' , upload.single('file'), addMovie)
router.get('/edit-movie/:id' , editMovie)
router.post('/edit-movie/:id' ,upload.single('file') ,  updateMovie)
router.get('/delete-movie/:id' , deleteMovie)
router.get('/description/:id' , description)

module.exports = router