import { Job } from "../models/job.model.js";
import sendResponse from "../utils/handleResponses.js";

export const postJob = async (req, res) => {
  try {
    const {
      title,
      description,
      requirements,
      salary,
      location,
      jobType,
      experience,
      position,
      companyId,
    } = req.body;
    const userId = req.id;

    if (
      !title ||
      !description ||
      !requirements ||
      !salary ||
      !location ||
      !jobType ||
      !experience ||
      !position ||
      !companyId
    ) {
      return sendResponse(res, 404, null, "All fields are required", false);
    }
    const job = await Job.create({
      title,
      description,
      requirements: requirements,
      salary: Number(salary),
      location,
      jobType,
      experienceLevel: experience,
      position,
      company: companyId,
      created_by: userId
    });

    return res.status(201).json({
      message: "Job created successfully",
      job,
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

// This function is performed by student
export const getAllJobs = async (req, res) => {
  try {
    const keyword = req.query.keyword || "";
    const query = {
      $or: [
        { title: { $regex: keyword, $options: "i" } },
        { description: { $regex: keyword, $options: "i" } },
      ],
    };
    const jobs = await Job.find(query)
      .populate({
        path: "company",
      })
      .sort({ createdAt: -1 });

    if (!jobs) {
      return sendResponse(res, 404, null, "No jobs found", false);
    } else {
      return sendResponse(res, 200, jobs, "Jobs Found Successfully", true);
    }
  } catch (error) {
    console.log(error);
  }
};

export const getJobById = async (req, res) => {
  try {
    const jobId = req.paras.id;
    const job = await Job.findById(jobId);

    if (!job) {
      return sendResponse(res, 404, "Job not found", null, false);
    } else {
      return sendResponse(res, 200, "Job found", job, true);
    }
  } catch (error) {
    console.log(error);
  }
};

export const getAdminJobs = async (req, res) => {
  try {
    const getAdminId = req.id;
    const jobs = await Job.find({ created_by: getAdminId });
    if (!jobs) {
      return sendResponse(res, 401, "No jobs found", null, false);
    } else {
      return sendResponse(res, 200, "Jobs found", jobs, true);
    }
  } catch (error) {
    console.log(error);
  }
};
