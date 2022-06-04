import multer from 'multer';

const date = new Date();
const fullDate = date.getDate() + '-'+ (date.getMonth() + 1) + '-' + date.getFullYear() + '-' 
+ date.getHours() + '-' + date.getMinutes() + '-';

const storageFile = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'src/public/file')
    },
    filename: function (req, file, cb) {
      cb(null, fullDate + Math.random() + '-' + file.originalname)
    }
})

const storageImg = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'src/public/img')
    },
    filename: function (req, file, cb) {
      cb(null,  fullDate + Math.random() + '-' + file.originalname)
    }
})
  
const uploadFile = multer({ storage: storageFile })
const uploadImg = multer({ storage: storageImg })

export {
    uploadFile,
    uploadImg
}