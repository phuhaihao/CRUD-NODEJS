import express from 'express';
import viewEngineConfig from './config/viewEngine';
import routerIndex from './routers/home';
import APIRouter from './routers/API';

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


viewEngineConfig(app);

routerIndex(app);
APIRouter(app);

app.listen(3000, () => {
    console.log("app run with port 3000");
})