const mongoose = require("mongoose"),
  multer = require('multer');
const ObjectId = mongoose.Types.ObjectId;
const Storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/images');// შესანახი პაპკა
  },
  filename: function (req, file, cb) {
    const fileId = new ObjectId();
    const ext = file.originalname.split('.').pop();
    const filename = fileId.toString() + '.' + ext;
    cb(null, filename);
  }
});
upload = multer({ storage: Storage });
module.exports = upload



