import * as Express from "express";
import { SandwichController } from "./controller";

const controller = new SandwichController();
const router = Express.Router();

router.post("/", async (req, res, next) => {
    controller.computeSandwichPrice(req, res, next);
});

router.post("/all", async (req, res, next) => {
    controller.getAllSandwiches(req, res, next);
});

export default router;