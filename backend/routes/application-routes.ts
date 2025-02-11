import express from "express";
import { applyJob, getApplications } from "../Controllers/application_controller";

const router = express.Router();

router.post("/applications", applyJob);
router.get("/applications", getApplications);

export default router