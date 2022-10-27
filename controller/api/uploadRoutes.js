const router = require('express').Router();
const { User } = require('../../models');
const path = require('path')

const multer = require('multer');
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "../models/userImages")
  },
  filename: (req, file, cb) => {
    console.log(file)
    cb(null, user_id + ' Profile Picture')
  }
})

const upload = multer({ storage: storage })

// router.get('/upload', (req, res) => {
//   res.render("upload")
// })

router.post('/upload', upload.single('image'), (req, res) => {
  res.send("Image Uploaded")
})

module.exports = router;