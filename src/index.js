import express from 'express';
import viewEngineConfig from './config/viewEngine';
import router from './routers/home';

const app = express();

viewEngineConfig(app);

router(app);

app.listen(3000, () => {
    console.log("app run with port 3000");
})