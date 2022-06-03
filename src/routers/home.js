import express from 'express';
import {    homeController, 
            detailUserController, 
            createUserController,
            updateUserController,
            updatedUserController,
            deleteleUserController
        } from '../controllers/homeController'

const router = express.Router();

const indexRouter = (app) => {
    router.get('', homeController)
    router.get('/detail/user/:id', detailUserController)
    router.post('/create/user', createUserController)
    router.get('/update/user/:id', updateUserController)
    router.post('/updated/user', updatedUserController)
    router.get('/delete/user/:id', deleteleUserController)

    return app.use('/', router);
}

export default indexRouter;