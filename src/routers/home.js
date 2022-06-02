import express from 'express';
import {homeController} from '../controllers/homeController'

const router = express.Router();

const indexRouter = (app) => {
    router.get('', homeController)

    return app.use('/', router);
}

export default indexRouter;