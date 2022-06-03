import express from 'express';
const router = express.Router();
import {    getUserAPIController,
} from '../controllers/APIController'

const APIRouter = (app) => {

    router.get('', getUserAPIController)

    return app.use('/api/v1', router)
}

export default APIRouter;
