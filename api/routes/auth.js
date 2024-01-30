import express from "express";

const router = express.Router();

router.get("/", (req, res)=>{
    res.send("Hello, this is auth end")
})

router.get("/register", (req, res)=>{
    res.send("Hello, this is register end")
})


export default router