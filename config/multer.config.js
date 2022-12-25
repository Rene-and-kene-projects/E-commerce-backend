/* eslint-disable import/prefer-default-export */
import multer from 'multer';
import path from 'path';

const store = multer({
  storage: multer.diskStorage({}),
  filefilter: (req, file, cb) => {
    const ext = path.extname(file.originalName);
    if (ext !== '.jpg' || ext !== '.png' || ext !== '.jpeg') {
      cb(new Error('File type is not supported'), false);
      return;
    }
    cb(null, true);
  }
});
export default store;
