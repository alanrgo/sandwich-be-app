import * as Express from "express";
import Health from "./health";
import Sandwich from "./sandwich";

const router = Express.Router();

router.use("/health", Health);
router.use("/sandwich", Sandwich);

export default router;