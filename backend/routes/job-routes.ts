import express from "express";
import { createJob, getJobs, getJob } from "../Controllers/job_controller";

const router = express.Router();

router.post("/jobs", createJob);
router.get("/jobs", getJobs);
router.get("/jobs/:id", getJob);

export default router