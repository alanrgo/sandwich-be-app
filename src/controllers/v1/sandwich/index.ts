import * as Express from "express";
import { SandwichController } from "./controller";

const controller = new SandwichController();
const router = Express.Router();

router.post("/", async (req, res, next) => {
    controller.computeSandwichPrice(req, res, next);
});
export default router;