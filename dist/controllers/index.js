"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Express = require("express");
const v1_1 = require("./v1");
const router = Express.Router();
router.use("/v1", v1_1.default);
exports.default = router;
//# sourceMappingURL=index.js.map