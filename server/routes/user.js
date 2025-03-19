import express from "express";
import { create } from "../controller/UserController.js";

const route = express.Router();

route.post("/create", create);

export default route;