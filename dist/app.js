"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Express = require("express");
const api_1 = require("./api");
class App {
    constructor(app = Express()) {
        this.app = app;
        this.mountRoutes();
    }
    mountRoutes() {
        this.app.use('/', api_1.default);
    }
}
exports.default = new App().app;
//# sourceMappingURL=app.js.map