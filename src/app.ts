import * as Express from "express";
import Api from "./api";
import * as bodyParser from "body-parser";

class App {

    constructor (public readonly app = Express()) {
        this.mountRoutes()
    }

    private mountRoutes (): void {
        this.app.use(bodyParser.json());
        this.app.use('/', Api);
    }
}

export default new App().app;