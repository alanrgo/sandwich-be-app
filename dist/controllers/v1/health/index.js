"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Express = require("express");
const controller_1 = require("./controller");
const controller = new controller_1.default();
const router = Express.Router();
router.get("/", (req, res, next) => __awaiter(this, void 0, void 0, function* () {
    controller.healthCheck(req, res, next);
}));
exports.default = router;
//# sourceMappingURL=index.js.map