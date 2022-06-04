import express from 'express';
import { uploadFile, uploadImg } from '../config/storage';
import {    homeController, 
            detailUserController, 
            createUserController,
            updateUserController,
            updatedUserController,
            deleteleUserController,
            uploadFileController,
            uploadedFileController,
            uploadedImgController
        } from '../controllers/homeController'

const router = express.Router();
const indexRouter = (app) => {
    router.get('', homeController);
    router.get('/detail/user/:id', detailUserController);
    router.post('/create/user', createUserController);
    router.get('/update/user/:id', updateUserController);
    router.post('/updated/user', updatedUserController);
    router.get('/delete/user/:id', deleteleUserController);
    router.get('/upload/file', uploadFileController);
    router.post('/uploaded/file', uploadFile.array('file',12), uploadedFileController);
    router.post('/uploaded/img', uploadImg.array('img', 12),uploadedImgController);

    return app.use('/', router);
}

export default indexRouter;