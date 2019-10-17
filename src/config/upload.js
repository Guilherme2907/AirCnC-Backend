 const multer = require('multer');
 const path = require('path')

 module.exports = {
     storage: multer.diskStorage({
         destination: path.resolve(__dirname, '..', '..', 'uploads'),
         filename: (req, file, callback) => {
             const extension = path.extname(file.originalname);
             const fileName = path.basename(file.originalname, extension);

             //  Primeiro parametro do callback recebe um erro
             callback(null, `${fileName}-${Date.now()}${extension}`)
         }
     })
 }