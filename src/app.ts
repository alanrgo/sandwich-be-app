import * as Express from "express";
import Api from "./api";

class App {

    constructor (public readonly app = Express()) {
        this.mountRoutes()
    }

    private mountRoutes (): void {
        this.app.use('/', Api);
    }
}

export default new App().app;