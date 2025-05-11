import express from "express";
import {
  createResidency,
  getAllResidencies,
  getResidency,
} from "../controllers/resdCntrl.js";
import jwtCheck from "../config/auth0Config.js";
import { checkAdminRole } from "../middleware/checkAdminRole.js"; // Updated the path to checkAdminRole.js

const router = express.Router();

/**
 * @route POST /create
 * @description Create a new residency (Admin access required)
 * @access Private (Admin only)
 */
router.post("/create", jwtCheck, checkAdminRole, createResidency);

/**
 * @route GET /allresd
 * @description Get all residencies
 * @access Public
 */
router.get("/allresd", getAllResidencies);

/**
 * @route GET /:id
 * @description Get a specific residency by ID
 * @access Public
 */
router.get("/:id", getResidency);

export { router as residencyRoute };
