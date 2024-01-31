import express from "express";
import { getUsers, updateUser, deleteUser, getUser } from "../controllers/user.js";
import { verifyToken } from "../utils/verifyToken.js";

const router = express.Router();

// Protected route to check user authentication
router.get("/checkAuthentication", verifyToken, (req, res, next) => {
    res.send("User, you are logged in");
});

// UPDATE
router.put("/:id", updateUser);

// DELETE
router.delete("/:id", deleteUser);

// GET
router.get("/:id", getUser);

// GET ALL
router.get("/", getUsers);

export default router;
