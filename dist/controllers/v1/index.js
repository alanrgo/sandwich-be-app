"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Express = require("express");
const health_1 = require("./health");
const router = Express.Router();
router.use("/health", health_1.default);
exports.default = router;
//# sourceMappingURL=index.js.map