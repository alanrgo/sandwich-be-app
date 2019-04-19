"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Express = require("express");
const controllers_1 = require("./controllers");
const router = Express.Router();
router.use("/api", controllers_1.default);
exports.default = router;
//# sourceMappingURL=api.js.map