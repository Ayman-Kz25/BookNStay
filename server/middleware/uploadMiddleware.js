import multer from "multer";

const storage = multer.memoryStorage(); // keep files in RAM
const upload = multer({ storage });
export default upload;