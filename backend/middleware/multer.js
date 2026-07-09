import multer from "multer";

const storage = multer.diskStorage({
  destination(req, file, cb) {
      cb(null, "uploads/");
  },
  filename:function(req,file,callback){
    callback(null, randomString(10) + '-' + file.originalname)
  }
})

const upload = multer({storage})

export default upload;