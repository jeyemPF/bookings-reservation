import express from "express";
import { getUsers, updateUser, deleteUser, getUser } from "../controllers/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

// Protected route to check user authentication
router.get("/checkAuthentication", verifyToken, (req, res, next) => {
    res.send("User, you are logged in");
});

router.get("/checkuser/:id", verifyUser, (req, res, next) => {
    res.send("User, you are logged in and you are free to delete ur account");
});

router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
    res.send("Admin, you are logged in and you are free to delete whole users account");
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
