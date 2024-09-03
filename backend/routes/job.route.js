import express from "express";
import { getAdminJobs, getAllJobs, getJobById, postJob } from "../controllers/job.controller.js";
import { isAuthenticated } from "../middlewares/isAuthenticated.js";

const router = express.Router();

router.route("/postjob").post(isAuthenticated , postJob)
router.route("/get").get(isAuthenticated,getAllJobs)
router.route("getadminjobs").get(isAuthenticated, getJobById)
router.route("/get/:id").get(isAuthenticated, getAdminJobs)

export default router;