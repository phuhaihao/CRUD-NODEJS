import express from 'express';
import viewEngineConfig from './config/viewEngine';
import router from './routers/home';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

viewEngineConfig(app);

router(app);

app.listen(3000, () => {
    console.log("app run with port 3000");
})