import multer from "multer";

const storage = multer.memoryStorage(); // keep files in RAM
const upload = multer({ 
    storage,
    limits: {
        fileSize: 5*1024*1024, //5MB per file
        files: 4, //Max 4 files
    },
    fileFilter: (req, file, cb) => {
        //Only allow images
        if(file.mimetype.startsWith('image/')){
            cb(null, true);
        } else {
            cb(new Error('Only image files are allowed!'), false);
        }
    }
 });
export default upload;